import React, { useState } from 'react'
import '../styles/SignUp.css'
import Login from './Login'
import SignUp from './SignUp'

export default function Auth() {
    
    const [login, setLogin] = useState(true)
    
    function handleClick(e) {
        e.preventDefault()
        setLogin(!login)
    }

    return (
        <div>
            {login ? <Login handleClick={handleClick}/> : <SignUp handleClick={handleClick}/>}
        </div>
    )
}