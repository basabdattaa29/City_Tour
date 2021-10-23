import React from 'react'
export default function A() {

//without jsx    
// return React.createElement('div',{id:'text'},"Hello react",
// React.createElement('h1', null, "basabdattaa"),
// React.createElement('h2', null, "Welcome")));
//CreateElement is a predefined method to embed html in js

//with jsx
//babel is transpiler of jsx which creates React.createElement
    return (
        <div className="text1">
         <h1>React Js</h1>   
        </div>
    )

}