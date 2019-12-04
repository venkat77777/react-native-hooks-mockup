import { useMutation } from "@apollo/react-hooks";
import { login } from "./operations";

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
