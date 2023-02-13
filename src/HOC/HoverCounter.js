import React from 'react'
import HOCComponent from './HOCComponent'

function HoverCounter(props) {
    return (
        <>
        <div onMouseOver={props.setState}>hover count : {props.count}</div>
        {props.name}
        </>
    )
}

export default HOCComponent(HoverCounter)
