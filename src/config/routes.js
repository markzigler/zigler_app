/*
 * @file: routes.js
 * @description: For defining and importing all screens/routes
 * @date: 26.03.2017
 * @author: Gurtej singh
 * */
import React from 'react';
import Landing from "../containers/landing";
import Login from "../containers/login";
import Singup from "../containers/signup";
import ForgotPassword from "../containers/forgotPassword";
import Drawer from '../containers/drawer';
import Detail from '../containers/detail';
import BuySellShares from '../containers/BuySellShares'
//import Auth from '../containers/auth';
import {Colors} from '../constants';
import NavBar from '../containers/auth/navBar';
import {
  StackNavigator,
  addNavigationHelpers,
  NavigationActions,
  DrawerNavigator
} from "react-navigation";

export default (routes = {
  //Auth:{screen:Auth},
  Landing: { screen: Landing },
  Login: { screen: Login},
  Singup: { screen: Singup},
  ForgotPassword: { screen: ForgotPassword},
  Drawer:{screen:Drawer},
  Detail:{screen:Detail},
  BuySellShares:{screen:BuySellShares}
});
