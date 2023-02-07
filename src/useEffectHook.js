import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [count, setCount]=useState(0);
    const [name, setName]=useState('');
    useEffect(()=>{
        console.log("Iwillactascomponentwillmount")
    },[])
    useEffect(()=>{
        return(()=>{
            console.log("Iwillactascomponentwillunmount")
        })
    })
    useEffect(()=>{
        document.title="you clicked "+count+"times";

    },[count])
    //useEffect without any dependency array acts like componentDidUpdate
    return (
     <div><input onChange={(e)=>setName(e.target.value)} value={name}></input><button onClick={()=>setCount(prevCount=>prevCount+1)}>click me</button></div>   
    )
}

export default UseEffectHook
