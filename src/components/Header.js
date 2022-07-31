import React from 'react'
import './header.css'

function Header() {
    const date = new Date();
    // console.log(date)
    let onlyDate = date.toString().slice(0, 16)
    


    return (

        <div className='header-cont'>
            <h1 className='header-title'>NEWSFEED</h1>   
            {onlyDate}
        </div>

    )
}

export default Header