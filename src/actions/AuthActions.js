
import {
  SAVE_USER_SUCCESS,
  LOG_OUT
} from './types';
import { showLoader,hideLoader } from "./loader";
import RestClient from "../utilities/RestClient";
import Common from "../utilities/common";
export const loginUser = (postData,navigate) => {
  return  dispatch => {
    dispatch(showLoader());
    RestClient.post(
      "apiLogin",
      postData,
    )
      .then(res => {
        dispatch(hideLoader());
        if (res.status_code == 1) {
         dispatch({type:SAVE_USER_SUCCESS,payload:res.result});
         navigate('Drawer');
        }else if(res.status_code==0){
            Common.ShowToast(res.message);
        }else{
            Common.ShowToast(res.message);
        } 
      })
      .catch(error => {
       //hide loader
       dispatch(hideLoader());
      });
  };
 
};
/**
Forgot Password API
*/

export const forgotPasswordRestAPI = (data,navigate) => {
  let requestObject = {
    email: data.email
  };
  return dispatch => {
    dispatch(showLoader());
    RestClient.post(
      "apiForgotPassword",
      requestObject,
    )
      .then(result => {
        dispatch(hideLoader());
        if (result.status_code == 1) {
          Common.ShowToast(result.message);
          setTimeout(()=>{
            navigate('Login')
          },100);
        
        }else if(result.status_code==0){
            Common.ShowToast(result.message);
        }else{
            Common.ShowToast(result.message);
        } 
      })
      .catch(error => {
       //hide loader
       dispatch(hideLoader());
      });
  };
};
/*Signup password API*/

export const signupUser = (postData,navigate) => {
  return dispatch => {
    dispatch(showLoader());
    RestClient.post(
      "apiSignup",
      postData,
    )
      .then(result => {
        console.log(result);
        dispatch(hideLoader());
        if (result.status_code == 1) {
          console.log(result);
          Common.ShowToast(result.message);
          setTimeout(()=>{
            navigate('Login')
          },100);
        }else if(result.status_code==0){
            Common.ShowToast(result.message);
        }else{
            Common.ShowToast(result.message);
        } 
      })
      .catch(error => {
       //hide loader
       dispatch(hideLoader());
      });
  };
 
};
/*update user information API*/
export const updateUserInfo = (postData) => {
  return dispatch => {
    dispatch(showLoader());
    RestClient.post(
      "apiUpdateProfile",
      postData,
    )
      .then(res => {
        dispatch(hideLoader());
        if (res.status_code == 1) {
          dispatch({type:SAVE_USER_SUCCESS,payload:res.result});
          Common.ShowToast(res.message);
        }else if(res.status_code==0){
            Common.ShowToast(res.message);
        }else{
            Common.ShowToast(res.message);
        } 
      })
      .catch(error => {
       //hide loader
       dispatch(hideLoader());
      });
  };
 
};
/*update user information API*/
export const logOut = (postData,navigation) => {
  return dispatch => {
    dispatch(showLoader());
    RestClient.post(
      "apiLogout",
      postData,
    )
      .then(res => {
        dispatch(hideLoader());
        if (res.status_code == 1) {
          dispatch({type:LOG_OUT,payload:null});
          Common.ShowToast(res.message);
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Login'})
            ]
          })
          navigation.dispatch(resetAction);
        }else if(res.status_code==0){
            Common.ShowToast(res.message);
        }else{
            Common.ShowToast(res.message);
        } 
      })
      .catch(error => {
       //hide loader
       dispatch(hideLoader());
      });
  };
 
};