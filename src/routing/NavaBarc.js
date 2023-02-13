import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const navstyle=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        textDecoration:isActive?'none':'underline'
    }
}


function NavaBarc() {
    return (
        <nav>
            <NavLink style={navstyle} to='/'>home</NavLink>
            <NavLink style={navstyle} to='about'>about</NavLink>
            <NavLink style={navstyle} to='nested'>nested</NavLink>

        </nav>
    )
}

export default NavaBarc
