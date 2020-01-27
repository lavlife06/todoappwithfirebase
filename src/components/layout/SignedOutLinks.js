import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import TodoContext from '../../context/todoContext';

const SignedOutLinks = () => {
  
  const todoContext = useContext(TodoContext);
  const { SignupClickHandler } = todoContext;
  
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