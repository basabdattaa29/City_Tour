import React,{useContext} from 'react'
import { userDetailContext } from '../App'

export const C = () => {
    //Accepts a context object (the value returned from React.createContext) and
    //returns the current context value, as given by the nearest context provider for
    //the given context.

    const contextData=useContext(userDetailContext);
    console.log(contextData);
    return (
        <div>
           <h3>This is sub Child Component</h3>
           <h4>User Name:{contextData.name}</h4>
           <h4>User Age:{contextData.age}</h4> 
        </div>
    )
}
