import {
    GET_SHARE_DETAIL_BUY_SELL
  } from './types';
  import { showLoader,hideLoader } from "./loader";
  import RestClient from "../utilities/RestClient";
  import Common from "../utilities/common";
  import _ from "lodash";
  export const setShareData = data => ({ type: GET_SHARE_DETAIL_BUY_SELL, payload:data });
  export const getShareDetail = (postData) => {
   
    try{
    return  dispatch => {
      dispatch(showLoader());
      RestClient.post(
        "apiMarketDetail",
        postData
      )
        .then(res => {
          console.log(res);
          dispatch(hideLoader());
          if (res.status_code == 1) {
            let arr =res.result;
           dispatch(setShareData(arr));
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
  }catch(e){
    console.log(e);
  }
   
  };

  