import React,{useState} from 'react'
import { Form} from 'react-bootstrap'

export const Contact = () => {
    const [inputState,setInputState]=useState({isError:{
        phno:'',
        email:''
    }})
    const handelChange=(event)=>{
        event.persist();
        // console.log(event);
        let {name, value}=event.target
        let errHandle={...inputState.isError};
        switch(name){
            case "phno":
                errHandle.phno=
                value.length<10 ? "Atleast 10 characters": ""; 
                break;
            case "email":
                errHandle.email=
                value.length<10? "Atleast 10 characters": "";
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
   }    
    return (
        <div className="container">
        <Form onSubmit={submitHandler}>
            <h1>Feedback Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Phone Number:</Form.Label>
         <Form.Control type="text" name="phno" placeholder="+1(222) 345 6789" onChange={handelChange} />
         {inputState.isError.phno.length>0 &&
         (<span>{inputState.isError.phno}</span>)}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email:</Form.Label>
         <Form.Control type="text" name="email" placeholder="info@mywebsite.com" onChange={handelChange} />
         {inputState.isError.email.length>0 &&
         (<span>{inputState.isError.email}</span>)}
        </Form.Group>        
<p>Contact With Us AnyTime</p>
</Form>
            
        </div>
    )
}


