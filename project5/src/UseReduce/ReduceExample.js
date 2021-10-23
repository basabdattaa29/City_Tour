import React,{useReducer} from 'react'
//step 2
const initialState=0;
//step 5

const reducer=(state,action)=>{
    switch(action){
        case 'increment': return state+1;
        case 'decrement': return state-1;
        case 'reset': return 0;
        default: throw new Error('Unexpected action');
    }
}

 const ReduceExample = () => {
     //step 3
     const[count, dispatch]=useReducer(reducer, initialState);
    return (
        <div> 
          {/* {count=initialState}   */}
          {count}
          <button onClick={()=>dispatch('increment')}> +1</button><br/>
          <button onClick={()=>dispatch('decrement')}> -1</button><br/>
          <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    );
};
export default ReduceExample;
