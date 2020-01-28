import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = ({ SignupClickHandler }) => {
  
  return (
    <div>
      <ul className="right">
        <li onClick={SignupClickHandler}><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks