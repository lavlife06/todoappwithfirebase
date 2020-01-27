import React,{ useState } from 'react';
import { fire } from '../config/fbConfig';

const SignUp = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  
  const signuphandler = () => {
    return (
      fire.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
        console.log(resp)
      })      
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signuphandler();
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }
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
  )
}

export default SignUp