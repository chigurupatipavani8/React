import React, { useState } from 'react'

function HOCComponent(Component) {
    const NewCom=(props)=>{
    const [count,setCount]=useState(0)
    const Handler=()=>{
        setCount((prev)=>prev+1)
    }
    return (
        <Component count={count} setState={Handler} {...props}></Component>
    )}
    return(NewCom)
}

export default HOCComponent
