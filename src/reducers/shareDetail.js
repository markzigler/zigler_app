import { REHYDRATE } from 'redux-persist/constants'
import {
   GET_SHARE_DETAIL_BUY_SELL
  } from '../actions/types';
  const INITIAL_STATE = {
    shareDetail:[],
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_SHARE_DETAIL_BUY_SELL:
        return { ...state, shareDetail:action.payload};
      case REHYDRATE:
        return state
      default:
        return state;
    }
  };
  