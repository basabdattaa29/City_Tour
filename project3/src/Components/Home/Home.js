import React from 'react'

export const Home = ({match}) => {
    console.log("Match value:", {match})
    return (
        <div>
           <h1>Good Morning. Welcome Here</h1> 
           <p>{match.params.id}</p>
        </div>
    )
}
