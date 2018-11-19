import {
    SET_MARKET_LIST
  } from './types';
  import { showLoader,hideLoader,showLoaderList,hideLoaderList,hideLoaderRefreshing,showLoaderRefreshing } from "./loader";
  import RestClient from "../utilities/RestClient";
  import Common from "../utilities/common";
  import _ from "lodash";
  export const setMarketListData = data => ({ type: SET_MARKET_LIST, payload:data });
  export const getMarketList = (postData,isRefreshing) => {
    try{
    return  dispatch => {
      isRefreshing?dispatch(showLoaderRefreshing()):dispatch(showLoaderList());
      RestClient.post(
        "apiGetMarket",
        postData
      )
        .then(res => {

          isRefreshing?dispatch(hideLoaderRefreshing()):dispatch(hideLoaderList());
          if (res.status_code == 1) {
            let arr =res.result;
           dispatch(setMarketListData(arr));
          }else if(res.status_code==0){
              Common.ShowToast(res.message);
          }else{
              Common.ShowToast(res.message);
          } 
        })
        .catch(error => {
       console.log(error);
         //hide loader
         isRefreshing?dispatch(showLoaderRefreshing()):dispatch(showLoaderList());
        });
    };
  }catch(e){
    console.log(e);
  }
   
  };

  