import {
    SET_PORTFOLIO_LIST
  } from './types';
  import { showLoader,hideLoader,showLoaderList,hideLoaderList,hideLoaderRefreshing,showLoaderRefreshing } from "./loader";
  import RestClient from "../utilities/RestClient";
  import Common from "../utilities/common";
  import _ from "lodash";
  export const setPortfolioListData = data => ({ type: SET_PORTFOLIO_LIST, payload:data });
  export const getPortfolioList = (postData,isRefreshing) => {
    try{
    return  dispatch => {
      isRefreshing?dispatch(showLoaderRefreshing()):dispatch(showLoaderList());
      RestClient.post(
        "apiMyPortfolio",
        postData
      )
        .then(res => {
          isRefreshing?dispatch(hideLoaderRefreshing()):dispatch(hideLoaderList());
          if (res.status_code == 1) {
            let arr =res.result;
           dispatch(setPortfolioListData(arr));
          }else if(res.status_code==0){
              Common.ShowToast(res.message);
          }else{
              Common.ShowToast(res.message);
          } 
        })
        .catch(error => {
          console.log(error);
          isRefreshing?dispatch(hideLoaderRefreshing()):dispatch(hideLoaderList());
        });
    };
  }catch(e){
    console.log(e);
  }
   
  };

  