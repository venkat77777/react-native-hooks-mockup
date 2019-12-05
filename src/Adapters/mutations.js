import { useMutation } from "@apollo/react-hooks";
import { login } from "./operations";

/**
 * useLogin: Update the values in the context
 * @param {string} variable the name of the value to be updated
 *
 * @returns {object} params:{startApi:function,response:object } //description
 **/

function useLogin(variables) {
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

export { useLogin };
