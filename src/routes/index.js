import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Province } from '../pages/Province'
import { Flashsale } from '../pages/Flashsale'
import { Provincedetail } from '../pages/Provincedetail'
import { Information } from '../pages/Information'
import { Travelproduct } from '../pages/Travelproduct'
import { Travelproductdetail } from '../pages/Travelproductdetail'
import {Cart } from '../pages/CartProduct'
import { Summary } from '../pages/SummaryBill' 
import {Ordersuccessful} from '../pages/Ordersuccessful'
export default () => (
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/Province" component={Province} />
     <Route exact path="/Flashsale" component={Flashsale} />
     <Route exact path="/Provincedetail" component={Provincedetail} />
     <Route exact path="/Information" component={Information} />
     <Route exact path="/Travelproduct" component={Travelproduct} />
     <Route exact path="/Travelproductdetail" component={Travelproductdetail} />
     <Route exact path="/Cart" component={Cart} />
     <Route exact path="/Summary" component={Summary} />
     <Route exact path="/Ordersuccessful" component={Ordersuccessful} />
    </Switch>
)
   


;