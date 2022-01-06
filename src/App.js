import React from "react";

import { Home } from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <div>
            <Switch>
              <Route path="/" component={Home} />

            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
