/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'tachyons';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';  
import Home from './components/layout/Home';
import TodoContext from './context/todoContext';
import TodoState from './context/todoState';

const App = () => {

  console.log(useContext(TodoContext))
  const todocontext = useContext(TodoContext);

  const { isUserLogedIn, onauthhandler, wantToSignup } = todocontext;

  useEffect(() => {
    onauthhandler();
  },[] )

  return (
    <TodoState>
      <Router>
      <Navbar />
        <Switch>
          { (isUserLogedIn && (<Router><Route exact path='/' component={Home} /> <Redirect to='/' /> </Router>)) 
              || 
            (!isUserLogedIn && (<Router><Route exact path='/signin' component={SignIn} /> <Redirect to='/signin' /> </Router>) && !wantToSignup)
              ||
              (!isUserLogedIn && (<Router><Route exact path='/signup' component={SignUp} /> <Redirect to='/signup' /> </Router>) && wantToSignup)}
        </Switch>
    </Router>    
  </TodoState>
  )
}

export default App;
