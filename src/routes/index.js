import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { LoginWithPhone } from "../pages/LoginPageWithPhone";
import { Register } from "../pages/Register";
import { LoginWithEmail } from "../pages/LoginPageWithEmail";
import { ForgotPassword} from "../pages/ForgotPassword";

export default()=>(
  <Switch>
    <Route exact path="/" component={LoginWithPhone} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/loginWithEmail" component={LoginWithEmail} />
    <Route exact path="/forgotPassword" component={ForgotPassword} />
  </Switch>
);
