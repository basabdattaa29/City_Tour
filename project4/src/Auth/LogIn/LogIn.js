import React,{useState} from 'react'
import axios from 'axios';
import { Form,Button } from 'react-bootstrap';
import { Link,useHistory} from 'react-router-dom';



export const LogIn = () => {
    let history=useHistory()

    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
     const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState,setInputState]=useState({isError:{
        email:'',
        password:'' 
    }})  
    const handelChange=(event)=>{
        event.persist();
        // console.log(event);
        let {name, value}=event.target
        let errHandle={...inputState.isError};
        switch(name){
            case "email":
                errHandle.email=
                // value.length<14 ? "Atleast 14 characters": "";
                validateEmail.test(value)?"":"Wrong Pattern";
                break;
            case "password":
                errHandle.password=
                // value.length<10 ? "Atleast 10 characters": "";
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
   window.sessionStorage.setItem("Token",res.data.token)
   history.push("/itemCatagory")
 })
 .catch((err)=>{
   console.log(err);  
 })         
     }
    return (
        <div className="container">
         <Form onSubmit={submitHandler}>
             <h1>Log In</h1>
               
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter Email"onChange={handelChange}/>
        {inputState.isError.email.length>0 &&
         (<span>{inputState.isError.email}</span>)}
        </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
       <Form.Control type="password" name="password" placeholder=" Enter Password" onChange={handelChange} />
       {inputState.isError.password.length>0 &&
         (<span>{inputState.isError.password}</span>)}
        </Form.Group>
        <Button as="input" type="submit" value="Submit"/>{' '}
        <p>Not A Member?</p>
      <Link to='/registrationpage'>  Sign Up  </Link>
</Form>
        </div>
    )
}
