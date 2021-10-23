import React,{useState} from 'react'
import axios from 'axios';
import { Form,Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

export default function LogIn() {

    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
    const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
   const [inputState,setInputState]=useState({isError:{
       email:'',
       password:'' 
   }}) 
   const handelChange=(event)=>{
    event.persist();
    let {name, value}=event.target
    let errHandle={...inputState.isError};
    
    switch(name){
        case "email":
            errHandle.email=
            validateEmail.test(value)?"":"Wrong Pattern";
            break;
        case "password":
            errHandle.password=
        
            validatePassword.test(value)?"":"Wrong Pattern";
            break;
            default:
            break; 
        }
        setInputState({...inputState,[name]:value, isError:errHandle});
        console.log("InputState:", inputState);
   }
   const submitHandler=(event)=>{
    event.preventDefault();
    console.log("After submit:",inputState); 
    // console.log(event);
    const value=inputState
axios.post('https://project-node-1.herokuapp.com/postLoginData', value)
.then((res)=>{
console.log("Axios response is", res);  
})
.catch((err)=>{
console.log(err);  
})         
 }
return (
    <div className="container">
     <Form onSubmit={submitHandler} className="frm">
         <h1>Log In</h1>
           
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type className="email" name="email" placeholder="Enter Email" onChange={handelChange}/>
    {inputState.isError.email.length>0 &&
     (<span>{inputState.isError.email}</span>)}
    </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
   <Form.Control type className="password" name="password" placeholder=" Enter Password" onChange={handelChange} />
   {inputState.isError.password.length>0 &&
     (<span>{inputState.isError.password}</span>)}
    </Form.Group>
    <Button variant="primary" type="submit" className="btn">Submit</Button>
     <p> Not Register?</p>
     <Link to='/registration'>Sign Up</Link>
</Form>
</div>
    )
}
