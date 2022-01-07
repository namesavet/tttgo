import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { LoginWithPhone } from "../pages/LoginPageWithPhone";

export default()=>(
  <Switch>
    <Route exact path="/" component={LoginWithPhone} />
  </Switch>
);
