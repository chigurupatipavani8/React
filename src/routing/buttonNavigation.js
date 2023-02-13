import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonNavigation() {
    const navigation=useNavigate();
    return (
        <>
        <div>Hello this is button navigation page</div>
        <button onClick={()=>navigation(-1)}>click to go back</button>
        </>
    )
}

export default ButtonNavigation
