import React ,{useState}  from 'react'

 const State1 = () => {
    const [val, setChange]= useState([{fname:"ab", lname:"bc", age:24},
                                      {fname:"ab", lname:"bc", age:24},
                                      {fname:"ab", lname:"bc", age:24}]);
    const handleChange=()=>{
        // setChange({fname:"bc", lname:"dc", age:14});
        setChange({...val,lname:"ASDF"});
    }
    return (
        <div>
             {/* <h2>First Name:{val.fname}, Last Name:{val.lname}, Age:{val.age}</h2>  */}
             {
             val.map((val.index)=>(
                 <React.Fragment key={index}>
                    <h1>{val.fname},{val.lname},{val.age}</h1>
                 </React.Fragment>
             ))
             }
             <button onClick={handleChange}>Cilick to Change</button> 
        </div>
    )
}
export default State1;