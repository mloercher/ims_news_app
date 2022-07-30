import React from 'react'
import './header.css'

function Header() {
    const current = Date()
    return (

        <div className='header-cont'>
            <h1 className='header-title'>JUST THE NEWS</h1>   
            {current}
        </div>

    )
}

export default Header