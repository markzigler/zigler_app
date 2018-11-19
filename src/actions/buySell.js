
  import { showLoader,hideLoader } from "./loader";
  import RestClient from "../utilities/RestClient";
  import Common from "../utilities/common";
  import { NavigationActions } from 'react-navigation';
  
  export const buySellSharesApi = (postData,navigation) => {
    console.log(postData);
    try{
    return  dispatch => {
      dispatch(showLoader());
      RestClient.post(
        "apiOrder",
        postData
      )
        .then(res => {
          dispatch(hideLoader());
          if (res.status_code == 1) {
            console.log(res);
            let data =res.result;
           Common.ShowToast(res.message);
           const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Drawer' }),
            ],
          });
          navigation.dispatch(resetAction);
          }else if(res.status_code==0){
              Common.ShowToast(res.message);
          }else{
              Common.ShowToast(res.message);
          } 
        })
        .catch(error => {
       console.log(error);
         //hide loader
         dispatch(hideLoader());
        });
    };
  }catch(e){
    console.log(e);
  }
   
  };
    export const buySellShares = (postData) => {
    console.log(postData);
    try{
    return  dispatch => {
    
      dispatch(showLoader());
  
      RestClient.post(
        "apiOrder",
        postData
      )
        .then(res => {
          dispatch(hideLoader());
          if (res.status_code == 1) {
            let arr =res.result;
           dispatch(setMarketListData(arr));
           Common.ShowToast(res.message);
          }else if(res.status_code==0){
              Common.ShowToast(res.message);
          }else{
              Common.ShowToast(res.msg);
          } 
        })
        .catch(error => {
       console.log(error);
         //hide loader
         dispatch(hideLoader());
        });
    };
  }catch(e){
    console.log(e);
  }
   
  };


  