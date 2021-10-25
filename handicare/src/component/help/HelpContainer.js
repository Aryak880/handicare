import React from 'react'
import HelpCard  from './help-card/HelpCard'
import './help.css'

const HelpContainer = () => {
    return (
        <div className='container help-container'>
            This is help container
            <HelpCard />
        </div>
    )
}


export default HelpContainer
