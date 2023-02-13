import React from 'react'

function ErrorOnProps(props) {
    if(props.status==='error'){
        throw new Error("status is error");
    }
    return (
        <>
        <div>Hello, the status is {props.status}</div>
        </>
    )
}

export default ErrorOnProps
