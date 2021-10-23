import React,{lazy, Suspense} from 'react';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import  {Home}  from '../Component/Home/Home';
import  {ProductCatagory} from '../Product/ProductCatagory/ProductCatagory';
import  {ProductSubCat}  from '../Product/ProductSubCat/ProductSubCat';
import { Header } from '../Header/Header';
import { ProductDetails } from '../Product/ProductDetails/ProductDetails';
import Registration from '../Auth/Registration From/Registration';
import FormikComponent from '../Formik/FormikComponent';
import { ItemCatagory } from '../Item/ItemCatagory/ItemCatagory';
import { ItemSubCat } from '../Item/ItemSubCat/ItemSubCat';
import { ItemDetails } from '../Item/ItemDetails/ItemDetails';
import { LogIn } from '../Auth/LogIn/LogIn';
import Protected from './Protected';



const Contact=lazy(()=> import("../Component/Contact/Contact"));
const Feedback=lazy(()=>import ("../Component/Feedback/Feedback"));
export const Routes = () => {
  return (
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route path="/formikcomponent" component={FormikComponent}></Route>
       <Route  path="/registrationpage" component={Registration}></Route>
       <Route path="/login" component={LogIn}></Route>

      
      
       <Route path="/itemSubCat/:sub_name" component={ItemSubCat}></Route>
       <Route path="/itemCatagory" component={ItemCatagory}></Route>
       <Route path="/itemDetails/:id" component={ItemDetails}></Route>
       <Protected path="/itemCatagory" component={ItemCatagory}></Protected>



       <Route path="/productcatagorypage" component={ProductCatagory}></Route>
       <Route path="/productsubcatpage/:pname" component={ProductSubCat}></Route>
       <Route path="/productdetailspage/:pname/:id" component={ProductDetails}></Route>
       <Route
         path="/Contact"
         render={()=>(
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Contact/>
            </Suspense>
         )
        }
       />
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
