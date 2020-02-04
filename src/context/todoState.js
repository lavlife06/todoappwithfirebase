import React, { useReducer } from 'react';
import {
  HANDLESIGNUPSUBMIT
} from './types';
import { fire,db } from '../components/config/fbConfig';
import TodoContext from './todoContext';
import TodoReducer from './todoReducer';

const TodoState = (props) => {
  const initialState = {
    useruid: ''
  }

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleSignUpSubmit = (email, password, firstName, lastName) => {
    let useruid;
    fire.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
      console.log(resp.user.uid)
      useruid = resp.user.uid ;
      return (
        db.collection('users').doc(resp.user.uid).set({
          useruid: useruid,
          firstName: firstName,
          lastName: lastName,
          initials: firstName[0].toUpperCase() + lastName[0].toUpperCase(),
          todolist: []
        })
      )
    });
    console.log(useruid);
    dispatch({
      type: HANDLESIGNUPSUBMIT,
      payload: useruid // It is the actual data which we want to set or send 
    });
  }

  return (<TodoContext.Provider
    value={{
      useruid: state.useruid,
      handleSignUpSubmit
    }}
  >
    {props.children}
  </TodoContext.Provider>)
}

export default TodoState;