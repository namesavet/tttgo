import React from "react";
// import LoginWithEmail from "./pages/LoginPageWithEmail/LoginWithEmail"
// import Register from "./pages/Register/Register"
import Routing from "./routes";
// import LoginWithPhone from "./pages/LoginPageWithPhone/LoginWithPhone"
import { withRouter } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div className="my-app">
        <Routing />
      </div>
    );
  }
}

export default withRouter(App);
