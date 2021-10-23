import { authConstant } from "./ActionConst";
import axios from "axios";
import { ResponsiveEmbed } from "react-bootstrap";
export const signUp=(user)=>{
    //here user means the form value coming from the registration form

    return async (dispatch)=>{
        //action request send to the reducer
        dispatch({type:`${authConstant.USER_REGISTER}_REQUEST`});
        axios.post(`https://api09.herokuapp.com/register`,user).then((res)=>{
            const msg=res.data.message
            console.log(res.data);
            
            //SUCCESS action generated
            //dispatch(actionType, playload(opt))
            dispatch({type:`${authConstant.USER_REGISTER}_SUCCESS`,payload:{message:msg,data:res.data}})
        }).catch((err)=>{
            dispatch({type:`${authConstant.USER_REGISTER}_FAILURE`,payload:{error:"Data not registered"}})
        })
    }
}

export const signIn=(user)=>{
    return async (dispatch)=> {
        //Request send to the server {type:`${authConstant.User_LOGIN}_REQUEST`}
        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});
axios.post(`https://api09.herokuapp.com/login`,user).then((res)=>{
    const msg=res.data.message
    console.log(res.data);
    //Success action generated
    //dispatch(actionType,paylode(opt))
    window.localStorage.setItem('token', res.data.token)
     dispatch({type:`${authConstant.USER_LOGIN}_SUCCESS`,
    payload:{message:msg, userToken:res.data.token}})
}).catch((err)=>{
    console.log(err);
    //Failure action generated
    dispatch({type:`${authConstant.USER_LOGIN}_FAILURE`, 
    payload:{error:"not able to login"}})
})
    }
}