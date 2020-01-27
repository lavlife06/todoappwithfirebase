import React, { useReducer } from 'react';
import {
  ONAUTHHANDLER,
  SIGNUPCLICKHANDLER
} from './types';
import { fire } from '../components/config/fbConfig';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';

const TodoState = (props) => {
  const initialState = {
    isUserLogedIn: '',
    wantToSignup: false
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // onAuthHandler

  const onauthhandler = () => {
      let x;
      fire.auth().onAuthStateChanged(user => {
        if(user){
          console.log('logged in')
          x = user.uid
        }else{
          console.log('logged out');
          x = ''
        }
      })
      dispatch({
        type: ONAUTHHANDLER,
        payload: x // It is the actual data which we want to set or send 
      });
  }

  // wantToSignupHandler
  const SignupClickHandler = () => {
    dispatch({type: SIGNUPCLICKHANDLER, payload: true})
  }

  return (<TodoContext.Provider
    value={{
      isUserLogedIn: state.isUserLogedIn,
      wantToSingup: state.wantToSingup,
      onauthhandler,
      SignupClickHandler
    }}
  >
    {props.children}
  </TodoContext.Provider>)
}

export default TodoState;