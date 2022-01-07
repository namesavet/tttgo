import React from "react";
import Routing from "./routes";

import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import { BrowserRouter as Router,} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <div>
          <Routing />
          </div>

        </div>
      </Router>
    );
  }
}

export default withRouter(App);
