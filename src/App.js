// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'tachyons';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';  
import Home from './components/layout/Home';
import { fire, db } from './components/config/fbConfig';
import TodoState from './context/todoState';

const App = () => {

  const [isUserLogedIn, setIsUserLogedIn] = useState('');
  const [username, setUserName] = useState('');

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        console.log('logged in')
        setIsUserLogedIn(user.uid);
        db.collection('users').doc(user.uid).get().then((res) => {
          if (res.exists) {
            setUserName(res.data().initials)
        } else {
            console.log("No such document!");
        }
        })
      }else{
        console.log('logged out');
        setIsUserLogedIn('')
      }
    })    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[] )

  return (
    <TodoState>
    <Router>
       <Navbar isUserLogedIn={isUserLogedIn} username={username} />
        <Switch>
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
    </TodoState>   
  )
}

export default App;
