import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { Home } from '../pages/Home'

export default () => (
     <Switch>
     <Route exact path="/" component={Home} >

    </Route>
    </Switch>
)
   


;