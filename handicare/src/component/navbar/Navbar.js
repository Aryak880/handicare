import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='handicap'>Handicap</Link>
            <Link to='volunteer'>Volunteer</Link>
            <Link to='help'>Helps</Link>
            <Link to='signin'>Sign in</Link>
            <Link to='signup'>Sign up</Link>
        </div>
    )
}

export default Navbar
