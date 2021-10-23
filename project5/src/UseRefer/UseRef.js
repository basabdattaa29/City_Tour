import React,{useRef} from 'react'
//unControlled component as controlled by DOM
//to know the current state from DOM=>useRef lifecycle hook 

 function UseRef() {
     const inputElement=useRef(null);
     const onButtonClick=()=>{
         //'current' points to the muted text input element

        console.log(inputElement.current);
        inputElement.current.focus(); 
        //collecting value from input filed using UseRef 

        console.log("Input Filed Value:", inputElement.current.value)
     };
    return (
        <>
         <input ref={inputElement} type="text"/>
         <button onClick={onButtonClick}>Focus The input</button>   
        </>
    );
}
export default UseRef;