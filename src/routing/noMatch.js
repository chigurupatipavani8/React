import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoMatch() {
    const navigation=useNavigate()
    return (
       <>
       <div>page not found</div>
        <button onClick={()=>navigation(-1)}>Back</button>
       </> 
    )
}

export default NoMatch
