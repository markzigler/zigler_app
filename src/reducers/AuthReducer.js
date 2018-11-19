
import {
  SAVE_USER_SUCCESS,
  LOG_OUT
} from '../actions/types';
import { REHYDRATE } from 'redux-persist/constants';
import {NavigationActions} from 'react-navigation';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_SUCCESS:
      return { ...state, user: action.payload };
      case LOG_OUT:
      return { ...state, user: action.payload };
      case REHYDRATE:
      return state
      default:
      return state;
  }
};
