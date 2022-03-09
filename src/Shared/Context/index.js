import React, { useState } from "react";

export const Context = React.createContext("authorization");

const Provider = (props) => {
  const { children } = props;

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token") || ""
  );

  const [connectedUser, setConnectedUser] = useState(
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
  );
  const setToken = (accessToken) => {
    localStorage.setItem("access_token", accessToken);
    setAccessToken(accessToken);
  };

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setConnectedUser(user);
  };

  const clearStore = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    setAccessToken(null);
    setConnectedUser(null);
  };

  return (
    <Context.Provider
      value={{
        setUser,
        setToken,
        clearStore,
        accessToken,
        user: connectedUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
