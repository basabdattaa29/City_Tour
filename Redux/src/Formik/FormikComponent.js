import React from 'react'
import './Formik.css'
import {useFormik} from 'formik';
import axios from 'axios';

const ValidateErrors = (formValue)=>{
  const validEmail = RegExp('^(z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$[a-')  
  const validPassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')
  const ValidPhNo =RegExp('[7-9]{1}[0-9]{9}')
  const errors={};

  if(!formValue.firstname){
    errors.firstname="Please Enter First Name";
  }
  else if(formValue.firstname.length<3){
  errors.firstname="maxlength 3";
  }
  if(!formValue.lastname){
    errors.lastname="Please Enter Last Name"; 
  }
  else if(formValue.lastname.length<3){
    errors.lastname="maxlength 3";
    }
  if(!formValue.email){
     errors.email="Please Enter Email";
    } 
     else if(!validEmail.test(formValue.email)){
     errors.email="Invalid Email";
    }
  if(!formValue.password){
    errors.password="Please Enter Password"; 
    } 
   else if(!validPassword.test(formValue.password)){
     errors.password="Invalid Password";
   }
  if(!formValue.phnumber){
    errors.phnumber="Please Enter Phone Number"; 
    }  
    else if(!ValidPhNo.test(formValue.phnumber)){
      errors.phnumber="Invalid Phone Number";
    } 
  // console.log(errors);
  return errors;           
}
 function FormikComponent() {
   const formik=useFormik({
     initialValues:{
       firstname:'',
       lastname:'',
       email:'',
       password:'',
       phnumber:''
     },
     validate:ValidateErrors,
     onSubmit:(values)=>{
       console.log(values);
  axios.post('https://jsonplaceholder.typicode.com/users',values)
  .then((response)=>{
    console.log("Axios resp:", response);
  })
  .catch((error)=>{
    console.log(error);
  })
     }
   });
  return (
    <div>
  <form className="formaction" onSubmit={formik.handleSubmit}>  
  <h1>Registration Form</h1>
<label>Enter Your First Name: </label>   
<br></br><input type="text" id className="firstname" name="firstname" value={formik.values.firstname} onChange={formik.handleChange}/> <br></br> 
 {formik.errors.firstname ?
(<span style={{color:'red'}}>{formik.errors.firstname}</span>):null}
<label>Enter Your Last Name: </label>  
<br></br><input type="text" id className="lastname" name="lastname" value={formik.values.lastname} onChange={formik.handleChange}/> <br></br> 
{formik.errors.lastname ?
(<span style={{color:'red'}}>{formik.errors.lastname}</span>):null} 
  <label>Enter Your Email: </label>
{formik.errors.email ?
(<span style={{color:'red'}}>{formik.errors.email}</span>):null}   
<br></br><input type="email" id className="email" name="email" value={formik.values.email} onChange={formik.handleChange}/> <br></br>  
<label>Enter Your Password: </label>
{formik.errors.password ?
(<span style={{color:'red'}}>{formik.errors.password}</span>):null}
<br></br> <input type="password" id className="password" name="password" value={formik.values.password} onChange={formik.handleChange}/> <br></br>  
<label>Enter Your Phone Number: </label>
{formik.errors.phnumber ?
(<span style={{color:'red'}}>{formik.errors.phnumber}</span>):null}   
<br></br><input type="phnumber" id className="phnumber" name="phnumber" value={formik.values.phnumber} onChange={formik.handleChange}/> <br></br>

  <br></br><br></br><br></br>
  <input type="submit" id className="submit" value="submit" disabled={!(formik.isValid && formik.dirty)}></input> 

 </form>          
  </div>
  )
}
export default FormikComponent;