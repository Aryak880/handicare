import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'


const Footer = () => {
    return (
        <div className='container footer-container'>
            This is footer
            <Link to='profile'>Profile</Link>
        </div>
    )
}

export default Footer
