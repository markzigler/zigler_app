
import {
    HIDE_LOADER,
    SHOW_LOADER,
    HIDE_LOADER_LIST,
    SHOW_LOADER_LIST,
    HIDE_LOADER_REFRESHING,
    SHOW_LOADER_REFRESHING
  } from './types';
  export const hideLoader = () => {
    return (dispatch) => {
      dispatch({ type: HIDE_LOADER});
    };
  };
  export const showLoader = () => {
    return (dispatch) => {
      dispatch({ type: SHOW_LOADER});
    };
  };
  export const hideLoaderList = () => {
    return (dispatch) => {
      dispatch({ type: HIDE_LOADER_LIST});
    };
  };
  export const showLoaderList = () => {
    return (dispatch) => {
      dispatch({ type: SHOW_LOADER_LIST});
    };
  };
  export const hideLoaderRefreshing = () => {
    return (dispatch) => {
      dispatch({ type: HIDE_LOADER_REFRESHING});
    };
  };
  export const showLoaderRefreshing = () => {
    return (dispatch) => {
      dispatch({ type: SHOW_LOADER_REFRESHING});
    };
  };
  