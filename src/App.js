// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'tachyons';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';  
import Home from './components/layout/Home';
import { fire } from './components/config/fbConfig';

const App = () => {

  const [isUserLogedIn, setIsUserLogedIn] = useState('');

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        console.log('logged in')
        setIsUserLogedIn(user.uid)
        // console.log(user)
      }else{
        console.log('logged out');
        setIsUserLogedIn('')
      }
    })    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[] )

  return (
    <Router>
      <Navbar isUserLogedIn={isUserLogedIn} />
        <Switch>
          {/* { (isUserLogedIn) && (<Router><Route exact path='/home' render={() => (
            <Home isUserLogedIn={isUserLogedIn} />
          )}/> <Redirect to='/home' /> </Router>) } */}
          { (!isUserLogedIn && <Route exact path='/' component={SignIn} />) || (
            <Route exact path='/' render={() => (
            <Home isUserLogedIn={isUserLogedIn} />
          )}/>
          ) }
          <Route exact path='/signup' render={() => (
            <SignUp isUserLogedIn={isUserLogedIn} />)}/>
          <Route exact path='/signin' render={() => (
            <SignIn isUserLogedIn={isUserLogedIn} />
          )}/>
          <Route exact path='/home' render={() => (
            <Home isUserLogedIn={isUserLogedIn} />
          )}/>
        </Switch>
    </Router>    
  )
}

export default App;
