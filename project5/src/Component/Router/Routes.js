import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import UseRef from '../../UseRefer/UseRef';
import ReduceExample from '../../UseReduce/ReduceExample';
import { Header } from '../Header/Header';
import { Home } from '../../Home/Home';



export const Routes = () => {
    return (
        <Router>
    <Header></Header>
        <Switch>
         <Route path="/useref" component={UseRef}></Route>
         <Route path="/reducerexample" component={ReduceExample}></Route>
         <Route path="/home" component={Home}></Route>
       </Switch>
      </Router>
    )
}
