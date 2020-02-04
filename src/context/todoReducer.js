import {
  HANDLESIGNUPSUBMIT,
} from './types';

const TodoReducer = (state, action) => {
  switch(action.type){
    case HANDLESIGNUPSUBMIT:
      return {
        ...state,
        useruid: action.payload,
      };
    default:
      return state;
  }
}

export default TodoReducer;