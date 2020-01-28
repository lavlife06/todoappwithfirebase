// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'tachyons';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';  
import Home from './components/layout/Home';
import { fire } from './components/config/fbConfig';

const App = () => {

  const [isUserLogedIn, setIsUserLogedIn] = useState('');
  const [wantToSignup, setWantToSignUp] = useState(false);

  const SignupClickHandler = () => {
    setWantToSignUp(true);
  }

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        console.log('logged in')
        setIsUserLogedIn(user.uid)
      }else{
        console.log('logged out');
        setIsUserLogedIn('')
      }
    })    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[] )

  return (
    <Router>
      <Navbar isUserLogedIn={isUserLogedIn} SignupClickHandler={SignupClickHandler} />
        <Switch>
          { (isUserLogedIn && (<Router><Route exact path='/' component={Home} /> <Redirect to='/' /> </Router>)) 
              || 
            (!isUserLogedIn && (<Router><Route exact path='/signin' component={SignIn} /> <Redirect to='/signin' /> </Router>) && !wantToSignup)
              ||
              (!isUserLogedIn && (<Router><Route exact path='/signup' component={SignUp} /> <Redirect to='/signup' /> </Router>) && wantToSignup)}
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
        </Switch>
    </Router>    
  )
}

export default App;
