import React,{lazy, Suspense} from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Header} from '../../Component/Header/Header'
import {Home} from '../../Component/Home/Home';
import Registration from '../../Registration/Registration';
import LogIn from '../../LogIn/LogIn';
import {About} from '../../Component/About/About';
import {Contact} from '../../Component/Contact/Contact';
import {Tour} from '../../Component/Tour/Tour'
import {Tourcatagory} from '../../Component/Tour/Tourcatagory'
import {Tourdiff} from '../../Component/Tour/Tourdiff'
const Feedback=lazy(()=>import('../../Component/Feedback/Feedback'))


export const Routes = () => {
    return (
        <Router>
       <Header></Header>
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/registration" component={Registration}></Route>
            <Route  path="/login" component={LogIn}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/tour/:pname" component={Tour}></Route>
            <Route path="/tourcatagory/pname/:name" component={Tourcatagory}></Route>
            <Route path="/tourdiiff" component={Tourdiff}></Route>
            <Route
       path="/Feedback"
       render={()=>(
        <Suspense fallback={<h2>Loading.......</h2>}>
          <Feedback/>
        </Suspense> 
       )}
       />




            <Route render={()=><h2>404:Page Not Found</h2>}></Route>
          
            </Switch>
        </Router>
    )
}
