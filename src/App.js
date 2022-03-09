import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
//import { Context } from "./Shared/Context";
import screens from "./screens";

const App = () => {
  // const { user, accessToken } = useContext(Context);
  return (
    <BrowserRouter>
      <Switch>{renderRoutes(screens)}</Switch>
    </BrowserRouter>
  );
};

export default App;
