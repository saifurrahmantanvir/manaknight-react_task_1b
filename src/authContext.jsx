import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  // const role = JSON.parse(localStorage.getItem("role"));
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "LOGOUT",
    });
    // window.location.href = "/" + role + "/login";
    return false
  }
  return true
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate()

  React.useLayoutEffect(() => {
    // TODO
    const check = async () => {
      const role = JSON.parse(localStorage.getItem("role")) || 'admin';

      const response = await sdk.check(state.role)
      const isTokenValid = tokenExpireError(dispatch, response.message)

      if (!isTokenValid) {
        navigate('/' + role + '/login')
      }
    }

    check()
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
