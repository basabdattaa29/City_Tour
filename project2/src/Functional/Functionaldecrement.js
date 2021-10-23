import React from 'react'

const Functionaldecrement = (props) => {
    console.log("decrement: props value", props);
    return (
        <div>
          <h1>{props.data}</h1>  
          <button onClick ={props.Functionaldecrement}>Click to the Decrement</button> 
        </div>
    )
}

export default Functionaldecrement

