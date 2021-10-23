import React from 'react'

 function Functionalincrement(props) {
    console.log("decrement: props value", props);
    return (
        <div>
           <h1>{props.data}</h1>  
          <button onClick ={props.Functionalincrement}>Click to the Increment</button>  
        </div>
    )
}
export default Functionalincrement;