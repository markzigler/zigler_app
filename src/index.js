/*
 * @file: index.js
 * @description: App's root file to connect redux store with app
 * @date: 22.03.2018
 * @author: Gurtej Singh
 * */
import React, { Component } from "react";
import { Alert, NetInfo } from "react-native";
import { Provider } from 'react-redux'
import configureStore from "./config/configureStore";
import Root from './Root';
import {SetDeviceID} from './utilities/deviceInfo';
/* *
 * @function: Configuring redux store 
 * */
export const store = configureStore();
/*
 * Main component
 * */
class Main extends Component{

	constructor(props) {
		super(props);
		/* *
		 * @function: Initiliazing location utility
		 * */
	}
	async componentWillMount(){
		SetDeviceID(store);
		function handleFirstConnectivityChange(isConnected) {
			NetInfo.isConnected.removeEventListener('connectionChange',handleFirstConnectivityChange);
		  }
		  NetInfo.isConnected.addEventListener('connectionChange',handleFirstConnectivityChange);
		  NetInfo.isConnected.fetch().then(isConnected => {
		  });
	}
	/* *
	 * @function: Default render function
	 * */
	render(){
		return(
	      <Provider store={store}>
	        <Root/>
	      </Provider>
	    )
	}
}

export default Main