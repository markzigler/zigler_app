/*
 * @file: index.js
 * @description: Forgot password component
 * @date: 26.03.2017
 * @author: Gurtej singh
 * */
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";

import {NavigationActions} from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Constants from "../../constants";
import _ from "lodash";
import Regex from "../../utilities/Regex";
import Idx from "../../utilities/Idx";
import * as Actions from "../../actions";
import {
  FormTextInput,
  FormSubmitButton,
  Logo,
  Background,
  AuthHeader
} from '../../components/common';
import Common from "../../utilities/common";

class ForgotPassword extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
   
  }
  forgotPasswordAction() {
    const { navigation } = this.props;
    let { enterEmail, enterValidEmail } = Constants.i18n.common;
    if (_.isEmpty(this.state.email.trim())) {
      Common.ShowToast(enterEmail);
      return;
    }
    if (
      !Regex.validateEmail(this.state.email.trim()) &&
      !Regex.validateMobile(this.state.email.trim())
    ) {
      Common.ShowToast(enterValidEmail);
      return;
    }
    this.props.Actions.forgotPasswordRestAPI({ ...this.state },navigation.navigate);
  }

  render(){
    const { navigation } = this.props;
    const {heading,text,lock}=styles;
    return (
      <View style={{ flex: 1}}>
        <Background />
        <View style={styles.container}>
        <AuthHeader
            onPress={() => {
              navigation.dispatch(NavigationActions.back())
            }}
          />
          <Image source={Constants.Images.common.lock} style={lock}/>
          <Text style={heading}>
          Forgot Password?
          </Text>
          <Text style={text}>
         Please enter your email to get instructions to reset password
          </Text>
        
        <FormTextInput
                placeHolderText={Constants.i18n.common.enterEmail}
                onChangeText={email => this.setState({ email })}
                icon='envelope'
                iconColor={Constants.Colors.primary}
                keyboard="email-address"
                returnKey="next"
              />
         
        <FormSubmitButton
             _Press={() => {this.forgotPasswordAction()}}
                text={Constants.i18n.common.sendEmail}
        />
  
           </View>
           </View>

    );
 }
}


const styles = {
  container:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    alignItems: 'center',
    
  },errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  text: {
    color:Constants.Colors.White,
    fontSize: 18,
    fontWeight: '200',
    textAlign:'center',
    backgroundColor:Constants.Colors.Transparent,
    ...Constants.Fonts.normal,
    paddingLeft:Constants.BaseStyle.DEVICE_WIDTH*.05,
    paddingRight:Constants.BaseStyle.DEVICE_WIDTH*.05,
    paddingTop:Constants.BaseStyle.DEVICE_WIDTH*.02,
    opacity:0.9
  },
  heading: {
    color:Constants.Colors.White,
    fontSize: 18,
    fontWeight: '600',
    padding:Constants.BaseStyle.DEVICE_WIDTH*.02,
    backgroundColor:Constants.Colors.Transparent,
    ...Constants.Fonts.headers
  },
  lock:{
    marginTop:Constants.BaseStyle.DEVICE_WIDTH*.20
  }
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(ForgotPassword);
