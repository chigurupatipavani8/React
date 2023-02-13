import React from 'react'
import HOCComponent from './HOCComponent'

function ClickCounter(props) {
    return (
        <>
        <button onClick={props.setState}>click count : {props.count}</button>
        {props.name}
        </>
    )
}

export default HOCComponent(ClickCounter)
