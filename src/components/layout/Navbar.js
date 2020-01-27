import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import TodoContext from '../../context/todoContext'


const Navbar = () => {
  

  const todoContext = useContext(TodoContext);
  const links = todoContext.isUserLogedIn ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        { (!todoContext.isUserLogedIn && <Link to='/signin' className="brand-logo">MarioPlan</Link>) || (todoContext.isUserLogedIn && <Link to='/' className="brand-logo">MarioPlan</Link>) }
        { links }
      </div>
    </nav>
  )
}

export default Navbar;
