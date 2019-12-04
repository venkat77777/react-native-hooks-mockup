import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink, concat, Observable } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import AsyncStorage from "@react-native-community/async-storage";
import { setContext } from "apollo-link-context";
import { SubscriptionClient } from "subscriptions-transport-ws";
import config from "../config";

const getToken = async () => {
  return await AsyncStorage.getItem("jwtToken");
};

// Setup the authorization header for the http client
const request = async operation => {
  const jwt = await getToken();
  if (jwt) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });
  }
};

// Setup the request handlers for the http clients
const requestLink = new ApolloLink((operation, forward) => {
  return new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then(oper => {
        request(oper);
      })
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) {
        handle.unsubscribe();
      }
    };
  });
});

const socketClient = new WebSocketLink(
  new SubscriptionClient(config.websocketURL, {
    reconnect: true,
    lazy: true,
    inactivityTimeout: 0,
    connectionParams: async () => {
      const jwt = await getToken();
      if (jwt) {
        return {
          Authorization: `Bearer ${jwt}`
        };
      }
    }
  })
);

// Web socket link for subscriptions
const wsLink = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }),
  requestLink,
  socketClient
]);

socketClient.subscriptionClient.on("connecting", () => {
  console.log("connecting");
});

socketClient.subscriptionClient.on("connected", () => {
  console.log("connected");
});

socketClient.subscriptionClient.on("reconnecting", () => {
  console.log("reconnecting");
});

socketClient.subscriptionClient.on("reconnected", () => {
  console.log("reconnected");
});

socketClient.subscriptionClient.on("disconnected", () => {
  console.log("disconnected");
});

socketClient.subscriptionClient.maxConnectTimeGenerator.duration = () =>
  socketClient.subscriptionClient.maxConnectTimeGenerator.max;

// HTTP link for queries and mutations
const httpLink = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
            locations
          )}, Path: ${path}`
        )
      );
    }
    if (networkError) {
      console.log(`[Network error]: ${JSON.stringify(networkError)}`);
    }
  }),
  requestLink,
  new HttpLink({
    uri: config.httpURL,
    credentials: "same-origin"
  })
]);

// Link to direct ws and http traffic to the correct place
const link = ApolloLink.split(
  // Pick which links get the data based on the operation kind
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

//TODO @chaitanya, @ravi, @venkat this below context code is being used as requestLink context is not working as expected
const authMiddleware = setContext(async (req, { headers }) => {
  const jwt = await getToken();
  const authorization = jwt ? `Bearer ${jwt}` : null;
  if (authorization) {
    return {
      headers: {
        ...headers,
        Authorization: authorization
      }
    };
  }
});

const apolloClient = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache()
});

export default apolloClient;
