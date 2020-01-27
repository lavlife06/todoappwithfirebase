import React from 'react'
import { Link } from 'react-router-dom'
import  { fire } from '../config/fbConfig';

const SignedInLinks = () => {

  const ClickHandler = (e) => {
    e.preventDefault();
    fire.auth().signOut().then(() => {
      console.log('user signed out');
    })
  }

  return (
    <div>
      <ul className="right">
        <li onClick={ClickHandler} ><Link to='/signin'></Link>Log Out</li>
        <li><Link to='/' className="btn btn-floating lighten-1">LS</Link></li>
      </ul>
    </div>
  )
}

export default SignedInLinks