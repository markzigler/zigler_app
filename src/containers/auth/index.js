/*
 * @file: index.js
 * @description: For defining and importing all screens/routes for auth stack
 * @date: 26.03.2017
 * @author: Gurtej singh
 * */
import React from 'react';
import Login from "../login";
import Singup from "../signup";
import ForgotPassword from "../forgotPassword";
import { getNavigationOptions,getNavigationOptionsWithAction} from '../../utilities/navigation';
import {Colors} from '../../constants';
import NavBar from './navBar';
import {
  StackNavigator,
} from "react-navigation";
const LoginNavOptions =({
  header: null,
  })
const SignupOptions = (props)=>{
  const {navigation}=props;
  return getNavigationOptionsWithAction('Signup', Colors.primary, 'white', <NavBar navigation={navigation} />)
}
const ForgotNavOptions = (props)=>{
  const {navigation}=props;
  return getNavigationOptionsWithAction('Forgot Password', Colors.primary, 'white', <NavBar navigation={navigation} />)
}
const Auth = StackNavigator({
  Login: { screen: Login,navigationOptions:LoginNavOptions },
  Singup: { screen: Singup,navigationOptions:SignupOptions },
  ForgotPassword: { screen: ForgotPassword,navigationOptions:ForgotNavOptions }
}, {   
  initialRouteName: 'Login',
  headerMode: "card"
});
export default Auth;