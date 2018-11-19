import { REHYDRATE } from 'redux-persist/constants'
import {
   SET_PORTFOLIO_LIST
  } from '../actions/types';
  const INITIAL_STATE = {
    portfolioData:[],
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_PORTFOLIO_LIST:
        return { ...state, portfolioData: [...action.payload]};
      case REHYDRATE:
        return state
      default:
        return state;
    }
  };
  