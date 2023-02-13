import React from 'react'
import { buycake } from './CakeAction'
import {useSelector,useDispatch} from 'react-redux'
function HookContainer() {
    const numOfCake=useSelector(state=>state.numOfCake)
    const d=useDispatch()
    return (

        <div>
            <div>no of cake left {numOfCake}</div>
            <button onClick={()=>d(buycake())} >Buy</button>
        </div>
    )
}

export default HookContainer
