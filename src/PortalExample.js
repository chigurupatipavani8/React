import React from 'react'
import ReactDOM from 'react-dom'

function PortalExample() {
    return (
        ReactDOM.createPortal(<h1>hello this is portal component</h1>,
            document.getElementById("portal_root")
            )
    )
}

export default PortalExample
