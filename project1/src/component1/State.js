import React, {useState} from 'react'

 const State = () => {
     const [val, setChange]= useState("Current State")// Monting state
     const handleChange=()=>{
         setChange("updating done")// updating state
     }
    return (
        <div>
          <h2>{val}</h2> 
          {/* Mounting state in Life cycle Method */}
          <button onClick={handleChange}>Cilick to Change</button>
        </div>
    )
}
export default State;