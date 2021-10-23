import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Registration() {
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
    const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState,setInputState]=useState({isError:{
       name:'',
       phno:'',
       city:'',
      address:'',
       email:'',
       password:''
      
   }})

   const handleChange=(event)=>{
    event.persist();
    console.log(event);
    let {name, value}=event.target
    let errHandle={...inputState.isError};
    switch(name){
      case "nname":
            errHandle.fname=
            value.length>3 ? "Minimum 3 characters": "";
            break;
      case "phno":
                errHandle.phno=
                value.length<10 ? "Atleast 10 characters":"";
                break; 
      
    case "city":
                    errHandle.city=
                    value.length<3 ? "Atleast 3 characters":"";
                    break;  

    case "address":
                    errHandle.address=
                    value.length<3 ? "Atleast 3 characters":"";
                    break;  
                        
    case "email":
                   errHandle.email=
                   validateEmail.test(value)?"":"Invalid type";
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
                     console.log(event);
                     const value=inputState   
 axios.post(`https://project-node-1.herokuapp.com/postUserData`, value)  
    .then((res)=>{
    console.log("Axios response is", res);  
     })
    .catch((err)=>{
    console.log(err);  
    })         
                       } 
                                                  
    return (
        <div>
                   <Form onSubmit={submitHandler}>
             <h1>Sign Up</h1>
  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label> Name</Form.Label>
    <Form.Control type className="name" name="name" placeholder="Enter Your  Name" onChange={handleChange}/> 
    {inputState.isError.name.length>0 &&
    (<span>{inputState.isError.name}</span>)}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhNo">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type className="phno" name="phno" placeholder="Enter Your Phone Number" onChange={handleChange}/>
    {inputState.isError.phno.length>0 &&
    (<span>{inputState.isError.phno}</span>)}
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
    <Form.Control type className="city" name="city" placeholder="Enter Your City" onChange={handleChange}/>
    {inputState.isError.address.length>0 &&
    (<span>{inputState.isError.address}</span>)}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type className="address" name="address" placeholder="Enter Your Address" onChange={handleChange}/>
    {inputState.isError.address.length>0 &&
    (<span>{inputState.isError.address}</span>)}
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type className="email" name="email" placeholder="Enter Your Email" onChange={handleChange}/>
    {inputState.isError.email.length>0 &&
    (<span>{inputState.isError.email}</span>)}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type className="password" placeholder="Password" onChange={handleChange}/>
    {inputState.isError.password.length>0 &&
    (<span>{inputState.isError.password}</span>)}
  </Form.Group>
  <Button variant="primary" type="submit" className="btn">Submit</Button>
  <Form.Group>
  <p>already have account?</p>
  </Form.Group>
  <Button  className="lgnbtn">
      <Link to={`/login`} >Login Here</Link>
      </Button>
</Form>  
        </div>
    )
}
