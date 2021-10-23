import { authConstant } from "../Action/ActionConst";

const initState={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    message:'',
    error:''   
}

const AuthReducers=(state=initState,action)=>{
    console.log(action);
    switch(action.type){
        case `${authConstant.USER_REGISTER}_REQUEST`:
            return{
                ...state
            };
        case `${authConstant.USER_REGISTER}_SUCCESS`:
            return state={
                ...state,
                message:action.payload.message
            } 
        case `${authConstant.USER_REGISTER}_FAILURE`:
            return state={
                ...state,
                message:action.payload.error
            }  
        default:
            return state;    
                 
    }
}
export default AuthReducers;