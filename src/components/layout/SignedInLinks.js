import React from 'react'
import { Link } from 'react-router-dom'
import  { fire } from '../config/fbConfig';

const SignedInLinks = ({ username }) => {

  const ClickHandler = (e) => {
    e.preventDefault();
    fire.auth().signOut().then(() => {
      console.log('user signed out');
    })
  }

  // const UsernameHandler = () => {
  //   let username = '';
  //   db.collection('users').get().then((res) => {
  //     // console.log(res.docs['0']._document.proto.fields.initials.stringValue)
  //     username = res.docs['0']._document.proto.fields.initials.stringValue;
  //   })
  //   return username
  // }
  return (
    <div>
      <ul className="right">
        <li onClick={ClickHandler} ><Link to='/signin'></Link>Log Out</li>
        <li><Link to='/' className="btn btn-floating lighten-1">{username}</Link></li>
      </ul>
    </div>
  )
}

export default SignedInLinks