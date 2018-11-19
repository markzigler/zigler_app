'use strict';
import Snackbar from 'react-native-snackbar';
import Constants from "../constants";
var Common = {
 ShowToast:(val)=>{
     setTimeout(()=>{
        Snackbar.show({
            title: val,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:Constants.Colors.primary
        });
     },50)
   
   },
   isNumberPositive:(val)=>{
       if(val>=0){
           return true
       }else{
           return false;
       }
   }
}

module.exports = Common;