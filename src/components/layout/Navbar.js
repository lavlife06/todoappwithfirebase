import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = ({ isUserLogedIn, username }) => {
  
  const links = isUserLogedIn ? <SignedInLinks username={username} /> : <SignedOutLinks />;

  return (
  <nav className="nav-wrapper grey darken-3">
    <div className="container"><Link to='/' className="brand-logo">MyPlan</Link>
      { links }
    </div>
  </nav>
  )
}

export default Navbar;
