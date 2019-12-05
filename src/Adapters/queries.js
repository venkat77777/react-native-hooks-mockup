import { useLazyQuery } from "@apollo/react-hooks";
import { readProfile, readKYCStatus } from "./operations";

/**
   * useReadProfile: Wrapper function/hook to read the profile info from the server
   * @param {object} variables the name of the object to be passed
   * variables is a json object with filter, sort, order etc
   * below object is the generic representation of request params object
    const variables = {
      where: {
      profile info based(id, title, firstName, lastName etc),
      user: {
        user info based(id, loginID, password, role etc)
      },
      masterList_Some: 
      {
        profile info based(id, title, firstName, lastName etc),
        user: 
        {
        user info based(id, loginID, password, role etc)
        }
      },
      invitee_Some: {
        invitee info based(id, userNick)
        profile: {
          profile info based(id, title, firstName, lastName etc),
          user: 
          {
          user info based(id, loginID, password, role etc)
          }
        },
        card: {
          card info based(id, account number etc)
        }
      }
      },
      orderBy: {
        profile info based sorting(id, title ASC or DESC etc)
      },
      skip: Integer to skip the records,
      after: String,
      before: String,
      first: Integer,
      last: Integer
    }
   * @returns {object} params, the name of the object returned from the function/hook
   * example response from below function/hook would look like this
   params = {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        readProfile: {
          id, title etc
        }
      }
    }
  }
**/

function useReadProfileQuery(variables) {
  const params = {
    startApi: () => {},
    response: {}
  };
  try {
    const [doReadProfile, profileResponse] = useLazyQuery(readProfile, {
      variables
    });
    params.startApi = doReadProfile;
    params.response = profileResponse;
  } catch (e) {
    console.log("error in catch", e.message);
    params.response = {
      loading: false,
      error: e.message
    };
  }

  return params;
}

/**
 * useReadKYCStatus: Wrapper function/hook, to read the Kyc status of current logged in user
 * @param ,at present there is not need to pass any variables as of now, we can look at it later if necessary
 * @returns {object} params, the name of the object returned from the function/hook
 * example response from below function/hook would look like this
   params = {
    startApi: func,
    response: {
      loading: boolean( returns true if completed),
      error: Object( we can get the message by error.message){
        message: String
      },
      data: Object(response came from graphql server){
        readKYCStatus: {
          
        }
      }
    }
  }

 */
function useReadKYCStatusQuery() {
  const params = {
    startApi: () => {},
    response: {}
  };
  try {
    const [doReadKYCStatus, kycResponse] = useLazyQuery(readKYCStatus);
    params.startApi = doReadKYCStatus;
    params.response = kycResponse;
  } catch (e) {
    console.log("error in catch", e.message);
    params.response = {
      loading: false,
      error: e.message
    };
  }

  return params;
}

export { useReadProfileQuery, useReadKYCStatusQuery };
