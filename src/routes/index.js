import React from 'react'
import { BrowserRouter as Router,Switch, Route,} from 'react-router-dom'
import { Home } from '../pages/Home'

export default () => {
  


        <Route exact path="/" component={Home} >
            <Switch></Switch>
        </Route>

    
 };