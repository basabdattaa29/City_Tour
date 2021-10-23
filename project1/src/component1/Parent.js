import React from 'react'
// import  C  from './Child';
import Child from './Child';

 const Parent = () => {
      let val="data coming from parent";
      let val1="value1";
      let obj={fname:"za", lname:"ef"}
      let arrObj=[{fname:"aa", lname:"bf"}, {fname:"ac", lname:"gf"}, {fname:"af" , lname:"df"}] 
      
   
    return (
        <React.Fragment>
       {/* <Child data1={val1}> {val1} </Child> */}
         {/* <Child>{value}</Child> */}
        
         <Child data1={val1} data2={obj} data3= {arrObj} > {val} </Child>
        </React.Fragment>
    )
}
export default Parent;