/*
Author: Gurtej Singh
Description: to set Unique deviceID
*/
"use strict";
const uniqueId = require('react-native-unique-id')
import {
    SET_DEVICE_ID
    } from '../actions/types';
import * as Actions from "../actions";
export function SetDeviceID(store) {
    uniqueId()
  .then(id => store.dispatch({ type: SET_DEVICE_ID,payload:{deviceId:id} }))
  .catch(error => console.error(error))
    
}
  