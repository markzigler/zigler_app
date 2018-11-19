import { REHYDRATE } from 'redux-persist/constants'
import {
   SET_ORDER_HISTORY_LIST
  } from '../actions/types';
  const INITIAL_STATE = {
    orderData:[],
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_ORDER_HISTORY_LIST:
        return { ...state, orderData: [...action.payload]};
      case REHYDRATE:
        return state
      default:
        return state;
    }
  };
  