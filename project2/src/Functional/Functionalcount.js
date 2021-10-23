import React, { useState } from 'react'
import Functionalincrement from './Functionalincrement'
import Functionaldecrement from './Functionaldecrement'

export default function Functionalcount() {
    const[Inc,Setinc]=useState(0)
    const[Dec,Setdec]=useState(0)
    let Increment=()=>{
    Setinc(Inc+1)
    }
    let Decrement=()=>{
        Setdec(Dec-1)
    }
    return (
        <div>
      <Functionalincrement data={Dec} Functionalincrement={Increment}/>
      <Functionaldecrement data={Inc} Functionaldecrement={Decrement}/>
        </div>
    )
}

