// import React,{useState} from 'react'
// import { Form, Button} from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';
// import { signUp } from '../../Action/Auth.Action';
// import './Registration.css'
// // import axios from 'axios'

// export default function Registration() {
//     const dispatchMethod=useDispatch();
//     //step 2
// const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
//      const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
//     const [inputState,setInputState]=useState({isError:{
//         username:'',
//         email:'',
//         password:''   
    
//     }})//step 3

//     const handelChange=(event)=>{
//         event.persist();
//         // console.log(event);
//         let {name, value}=event.target
//         let errHandle={...inputState.isError};
//         switch(name){
//             case "username":
//                 errHandle.UserName=
//                 value.length<6 ? "Atleast 6 characters": "";
//                 break;
//              case "email":
//                 errHandle.email=
//                 // value.length<14 ? "Atleast 14 characters": "";
//                 validateEmail.test(value)?"":"Wrong Pattern";
//                 break;
//             case "password":
//                 errHandle.password=
//                 // value.length<10 ? "Atleast 10 characters": "";
//                 validatePassword.test(value)?"":"Wrong Pattern";
//                 break;
//             // case "phonenumber":
//             //         errHandle.phonenumber=
//             //         value.length<10 ? "Atleast 10 characters": "";
//             //         break;     
//             default:
//                 break;      
//         }
//          setInputState({...inputState,[name]:value, isError:errHandle});
//          console.log("InputState:", inputState);
//     }//step 4

//     const submitHandler=(event)=>{
//         event.preventDefault();
//         console.log("After submit:",inputState); 
//         const user=inputState;
//         dispatchMethod(signUp(user));
// //         console.log(event);
// //         const value=inputState
// //  axios.post('https://project-node-1.herokuapp.com/postUserData', value)
// //  .then((res)=>{
// //    console.log("Axios response is", res);  
// //  })
// //  .catch((err)=>{
// //    console.log(err);  
// //  })         
//      }
     

//     return (
        
//         <div className="container">
//          <Form onSubmit={submitHandler}>
//              <h1>Sign Up</h1>
//          <Form.Group className="mb-3" controlId="formBasicEmail">
//          <Form.Label>Name</Form.Label>
//          <Form.Control type="text" name="username" placeholder="Enter First Name" onChange={handelChange} />
//          {inputState.isError.username.length>0 &&
//          (<span>{inputState.isError.username}</span>)}
//         </Form.Group>   
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" name="email" placeholder="Enter Email"onChange={handelChange}/>
//         {inputState.isError.email.length>0 &&
//          (<span>{inputState.isError.email}</span>)}
//         </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//        <Form.Control type="password" name="password" placeholder=" Enter Password" onChange={handelChange} />
//        {inputState.isError.password.length>0 &&
//          (<span>{inputState.isError.password}</span>)}
//         </Form.Group>
//       <Button variant="success" type="submit" className="btn">Submit</Button>
// </Form>
//         </div>
//     )
// }
// import React,{useState} from 'react'
// import { Form, Button} from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux';


import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
 import { signUp } from '../../Action/Auth.Action';
 import './Registration.css'
// import axios from 'axios';

 const Registration = () => {

    const dispatchMethod=useDispatch();
    //step 2
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    const validatePwd=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState,setInputState]=useState({isError: {
        fname:'',
        lname:'',
        email:'',
        pwd:''
    }})
    //step 3
    const handleChange=(event)=>{
        event.persist();
        // console.log(event);
        let {name,value}=event.target;
        let isErr={...inputState.isError};
        switch(name){
            case "firstname":
                isErr.fname=
                value.length<4?"Atleast 4 characters required": "";
            break;
            case "lastname":
                isErr.lname=
                value.length<4?"Atleast 4 characters required": "";
            break;
            case "email":
                isErr.email=
                // value.length<4?"Atleast 4 characters required": "";
                  validateEmail.test(value)?"":"Wrong Pattern";
            break;
            case "password":
                isErr.pwd=
                // value.length<4?"Atleast 4 characters required": "";
                validatePwd.test(value)?"":"Wrong Pattern";
            break;
        }
        setInputState({...inputState,[name]:value,isError:isErr});
        console.log(inputState);
    }
    //step 4
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(inputState);
        const user=inputState;
        
        dispatchMethod(signUp(user));
        
    }
    return (
        
        <div className="container">
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicFname">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="firstname" onChange={handleChange}/>
                    {inputState.isError.fname.length>0 && ( 
                          <span >{inputState.isError.fname}</span>
                )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLname">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" name="lastname" onChange={handleChange} />
                    {inputState.isError.lname.length>0 && ( 
                          <span >{inputState.isError.lname}</span>
                )}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                    {inputState.isError.email.length>0 && ( 
                          <span >{inputState.isError.email}</span>
                )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                    {inputState.isError.pwd.length>0 && ( 
                <span >{inputState.isError.pwd}</span>
                )}
                </Form.Group>
                
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>
            
        </div>
    )
}
export default Registration;