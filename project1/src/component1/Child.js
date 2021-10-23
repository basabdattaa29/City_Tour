import React from 'react'
// import Child from './D';

 const Child = (props) => {
     console.log("Props value: ",props);
    return (
        <div>
          {/* <h1>{props.children}</h1>   */}
          <h1>{props.data1}</h1>  
         <h2>First Name:{props.data2.fname}, Last Name:{props.data2.lname}</h2>
         <h1>{props.data1}</h1>
        {props.data3.map((childData, index) => {
           <React.Fragment key={index}>
             <h2>{childData.fname}</h2>
             </React.Fragment>
        })}
        </div>
    )
}
export default  Child;