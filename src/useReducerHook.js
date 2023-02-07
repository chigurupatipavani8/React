import React, { useReducer } from 'react'

const initialcounts={
    firstCount:0,
    secondCount:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case'increment':
            return {...state,firstCount:state.firstCount+action.value}
        case'decrement':
            return {...state,firstCount:state.firstCount-action.value}
        case'reset':
            return initialcounts
    }
}

function UseReducerHook() {
    const [counts,dis]=useReducer(reducer,initialcounts)
    return (
        <div>
            <div>{`counts= {firstcount:${counts.firstCount}, secondcount:${counts.secondCount}}`}</div>
            <div><button onClick={()=>dis({type:'increment', value:1})}>Increment</button></div>
            <div><button onClick={()=>dis({type:'decrement', value:1})}>Decrement</button></div>
            <div><button onClick={()=>dis({type:'reset'})}>reset</button></div>
        </div>
    )
}

export default UseReducerHook
