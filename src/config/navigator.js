/*
 * @file: navigator.js
 * @description: used to render main navigation component
 * @date:27 march 2018
 * @author: Gurtej Singh
 * */
import React, { Component } from 'react'
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import routes from "./routes";
import Constants from "../constants";
import { BackHandler, Alert,View ,StatusBar, AsyncStorage} from 'react-native';
import ReactMixin from "react-mixin";
import TimerMixin from "react-timer-mixin";

class AppWithNavigationState extends Component{ 
  constructor(props){
    super(props);
  }  

  render() {
    const {user}=this.props.auth;
    const AppNavigator = StackNavigator(routes,{
      initialRouteName:user==null?'Landing':'Drawer',
      headerMode: "none",
      mode:"card",
    });
    return (
      <View style={{flex:1}}>
      <StatusBar
      hidden={true}
      />
     <AppNavigator />
      </View>
    );
  }
}
ReactMixin(AppWithNavigationState.prototype, TimerMixin);
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(AppWithNavigationState);