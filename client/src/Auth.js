import React, { useReducer, createContext, useState } from "react";
import { useSelector } from "react-redux";
const initialState = {
  user: null,
};

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [values, setValues] = useState({});
  const data = useSelector((state) => state.userLogin);
  
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const values = {
        role: localStorage.getItem("role"),
      };
      setValues(values);
    } else {
      console.log("on server side");
    }
  }, []);

  function login(data) {
    localStorage.setItem("role", data.role);
    dispatch({
      type: "LOGIN",
      payload: data,
    });
  }

  function logout() {
    localStorage.clear();
    dispatch({ type: "LOGOUT", payload: initialState });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user === null ? values : state.user,
        dispatch,
        login,
        logout,
      }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };