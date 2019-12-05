import { useMutation } from "@apollo/react-hooks";
import { login } from "./operations";

/**
 * useLoginMutation: Wrapper function/hook, to to login into the application
 * @param variables, is an object which takes the number and password in the below format
 * variables = {
     data: {
       loginID,
       password
      }
  }
 * @returns {object} params, the name of the object returned from the function/hook
 * example response from below function/hook would look like this
   {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        login: {
          token,
          user: {
              loginID
           },
          phoneVerified
        }
      }
    }
  }
 */
function useLoginMutation(variables) {
  const params = {
    startApi: () => {},
    response: {}
  };
  try {
    const [doLogin, loginResponse] = useMutation(login, {
      variables
    });
    params.startApi = doLogin;
    params.response = loginResponse;
  } catch (e) {
    console.log("error in login hook", e.message);
    params.response = {
      loading: false,
      error: e.message
    };
  }

  return params;
}

export { useLoginMutation };
