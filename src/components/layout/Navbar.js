import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { db } from '../config/fbConfig'


const Navbar = ({ isUserLogedIn }) => {
  
  useEffect(() => {
    console.log(db.users)
  }, [])
  console.log(db.users)

  const links = isUserLogedIn ? <SignedInLinks /> : <SignedOutLinks />;

  return (
  <nav className="nav-wrapper grey darken-3">
    <div className="container"><Link to='/' className="brand-logo">MyPlan</Link>
      { links }
    </div>
  </nav>
  )
}

export default Navbar;
