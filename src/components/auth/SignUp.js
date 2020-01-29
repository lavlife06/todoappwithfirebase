import React,{ useState } from 'react';
import { fire, db } from '../config/fbConfig';
import { Redirect } from 'react-router-dom';

const SignUp = ({ isUserLogedIn }) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
      return (
        db.collection('users').doc(resp.user.uid).set({
          firstName: firstName,
          lastName: lastName,
          initials: firstName[0] + lastName[0]
        })
      )
    })
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  if(isUserLogedIn){ return<Redirect to='/' /> }else{
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' value={password} onChange ={(e) => setPassword(e.target.value)}  required />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' value={firstName} onChange ={(e) => setFirstName(e.target.value)}  required />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id='lastName' value={lastName} onChange ={(e) => setLastName(e.target.value)}  required />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" >Sign Up</button>
        </div>
      </form>
    </div>
  )}
}

export default SignUp