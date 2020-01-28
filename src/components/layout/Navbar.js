import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = ({ isUserLogedIn, SignupClickHandler }) => {
  
  const links = isUserLogedIn ? <SignedInLinks /> : <SignedOutLinks  SignupClickHandler={SignupClickHandler} />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        { (!isUserLogedIn && <Link to='/signin' className="brand-logo">MyPlan</Link>) || (isUserLogedIn && <Link to='/' className="brand-logo">MarioPlan</Link>) }
        { links }
      </div>
    </nav>
  )
}

export default Navbar;
