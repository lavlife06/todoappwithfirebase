import {
  ONAUTHHANDLER,
  SIGNUPCLICKHANDLER
} from './types';

const TodoReducer = (state, action) => {
  switch(action.type){
    case ONAUTHHANDLER:
      return {
        ...state,
        isUserLogedIn: action.payload,
      };
    case SIGNUPCLICKHANDLER:
      return {
        ...state,
        wantToSignup: []
      };
    default:
      return state;
  }
}

export default TodoReducer;