import React,{useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import './Registration.css'
import axios from 'axios'

export default function Registration() {
const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
     const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState,setInputState]=useState({isError:{
        username:'',
        email:'',
        password:''   
    
    }})//step 2

    const handelChange=(event)=>{
        event.persist();
        // console.log(event);
        let {name, value}=event.target
        let errHandle={...inputState.isError};
        switch(name){
            case "username":
                errHandle.UserName=
                value.length<6 ? "Atleast 6 characters": "";
                break;
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
            // case "phonenumber":
            //         errHandle.phonenumber=
            //         value.length<10 ? "Atleast 10 characters": "";
            //         break;     
            default:
                break;      
        }
         setInputState({...inputState,[name]:value, isError:errHandle});
         console.log("InputState:", inputState);
    }//step 3

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("After submit:",inputState); 
        console.log(event);
        const value=inputState
 axios.post('https://project-node-1.herokuapp.com/postUserData', value)
 .then((res)=>{
   console.log("Axios response is", res);  
 })
 .catch((err)=>{
   console.log(err);  
 })         
     }
     

    return (
        
        <div className="container">
         <Form onSubmit={submitHandler}>
             <h1>Sign Up</h1>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Name</Form.Label>
         <Form.Control type="text" name="username" placeholder="Enter First Name" onChange={handelChange} />
         {inputState.isError.username.length>0 &&
         (<span>{inputState.isError.username}</span>)}
        </Form.Group>   
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
      <Button variant="success" type="submit" className="btn">Submit</Button>
</Form>
        </div>
    )
}
