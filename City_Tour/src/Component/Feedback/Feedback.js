import React,{useState} from 'react';
import { Form, Button} from 'react-bootstrap'

export default function Feedback() {
    const [inputState,setInputState]=useState({isError:{
        username:'',
        message:''   
    }})
    const handelChange=(event)=>{
        event.persist();
        // console.log(event);
        let {name, value}=event.target
        let errHandle={...inputState.isError};
        switch(name){
            case "username":
                errHandle.username=
                value.length<6 ? "Atleast 6 characters": "";
                break;
            case "message":
                errHandle.message=
                value.length<10 ? "Atleast 10 characters": "";
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
         <Form.Label>Name:</Form.Label>
         <Form.Control type="text" name="username" placeholder="Write Your Name" onChange={handelChange} />
         {inputState.isError.username.length>0 &&
         (<span>{inputState.isError.username}</span>)}
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Feedback:</Form.Label>
         <Form.Control type="textarea value" name="message" placeholder="Write Your Message" onChange={handelChange} />
         {inputState.isError.message.length>0 &&
         (<span>{inputState.isError.message}</span>)}
        </Form.Group>
        <Button variant="primary" type="submit" className="btn">Submit</Button>

</Form>
            
        </div>
    )
}
