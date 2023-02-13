import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { One, Two } from './nestedRouts'

function NestedParent() {
    return (
        <>
        <nav>
            <Link to="one">One</Link>
            <Link to="two">Two</Link>
        </nav>
        <Outlet></Outlet>
        </>
    )
}

export default NestedParent
