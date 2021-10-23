import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../Header/Header';
import Registration from '../Auth/Registration From/Registration';
import { LogIn } from '../Auth/LogIn/LogIn';

export const Routes = () => {
    return (
      
            <Router>
              <Header></Header>
           <Switch>
           <Route  path="/registrationpage" component={Registration}></Route>
           <Route path="/login" component={LogIn}></Route>
           </Switch>
           </Router>
    )
}
