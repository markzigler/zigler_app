import { REHYDRATE } from 'redux-persist/constants'
import {
   SET_MARKET_LIST
  } from '../actions/types';
  const INITIAL_STATE = {
    marketData:[],
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_MARKET_LIST:
        return { ...state, marketData: [...action.payload]};
      case REHYDRATE:
        return state
      default:
        return state;
    }
  };
  