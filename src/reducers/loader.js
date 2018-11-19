import { REHYDRATE } from 'redux-persist/constants'
import {
    HIDE_LOADER,
    SHOW_LOADER,
    HIDE_LOADER_LIST,
    SHOW_LOADER_LIST,
    SHOW_LOADER_REFRESHING,
    HIDE_LOADER_REFRESHING
  } from '../actions/types';
  const INITIAL_STATE = {
    isLoading:false,
    isListLoading:false,
    isRefreshing:false
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case HIDE_LOADER:
        return { ...state, isLoading: false };
      case SHOW_LOADER:
        return { ...state, isLoading: true };
      case SHOW_LOADER_LIST:
        return { ...state, isListLoading: true };
      case HIDE_LOADER_LIST:
        return { ...state, isListLoading: false };
        case SHOW_LOADER_REFRESHING:
        return { ...state, isRefreshing: true };
      case HIDE_LOADER_REFRESHING:
        return { ...state, isRefreshing: false };
      case REHYDRATE:
        return state
      default:
        return state;
    }
  };
  