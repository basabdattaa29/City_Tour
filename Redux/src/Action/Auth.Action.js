import { authConstant } from "./ActionConst";
import axios from "axios";
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