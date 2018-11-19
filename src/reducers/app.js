import { REHYDRATE } from 'redux-persist/constants'
import {
    SET_DEVICE_ID,
    HIDE_LOADER,
    SHOW_LOADER
  } from '../actions/types';
  const INITIAL_STATE = {
    deviceId:'',
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_DEVICE_ID:
        return { ...state, deviceId: action.payload.deviceId };
      case REHYDRATE:
        return state
      default:
        return state;
    }
  };
  