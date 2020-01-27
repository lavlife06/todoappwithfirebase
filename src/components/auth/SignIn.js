import React, { Component } from 'react'
import { fire } from '../config/fbConfig'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(userdetail => {
      // console.log(userdetail.user);
    })
    this.setState({email: '',password: ''});
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" >Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
