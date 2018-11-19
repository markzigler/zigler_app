/*
 * @file: Singup/index.js
 * @description: used to render singup component
 * @date:27 march 2018
 * @author: Gurtej Singh
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
import {FormTextInput,FormSubmitButton,Background,AuthHeader,Logo} from '../../components/common';
import { bindActionCreators } from "redux";
import Constants from "../../constants";
import * as Actions from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Regex from "../../utilities/Regex";
import Idx from "../../utilities/Idx";
import Common from "../../utilities/common";
class Signup extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      residentialAddress:'',
      password:'',
      confirmPassword:''
    };
  }

  signUpSubmit(){
    const { navigation } = this.props;
    let {deviceId}=this.props.app;
    let { firstName,lastName, email, residentialAddress, password,confirmPassword } = this.state;
    let { navigate } = this.props.navigation;
    let { 
      enterFirstName, 
      enterLastName,
      enterResidential,
      enterPassword,
      enterConfirmPassword,
      enterMatchPassword ,
      enterValidPassword,
      enterEmail,
      enterValidEmail,
      addressCheck
    } = Constants.i18n.common;
    if(_.isEmpty(firstName.trim())) {
      Common.ShowToast(enterFirstName);
      return;
    }
    if(_.isEmpty(lastName.trim())) {
      Common.ShowToast(enterLastName);
      return;
    }

    if(_.isEmpty(email.trim())) {
      Common.ShowToast(enterEmail);
      return;
    }

    if(!Regex.validateEmail(email.trim())) {
      Common.ShowToast(enterValidEmail);
      return;
    }
    if(_.isEmpty(residentialAddress.trim())) {
      Common.ShowToast(enterResidential);
      return;
    }
    if (!Regex.validateAddress(residentialAddress)) {
      Common.ShowToast(addressCheck);
      return;
    }
    if(_.isEmpty(password)) {
      Common.ShowToast(enterPassword);
      return;
    }
    if(!Regex.validatePassword(password)){
      Common.ShowToast(enterValidPassword);
      return;
    }
    if(_.isEmpty(confirmPassword)) {
      Common.ShowToast(enterConfirmPassword);
      return;
    }
    if(password!=confirmPassword) {
      Common.ShowToast(enterMatchPassword);
      return;
    }
    const dataToSend={
      first_name:firstName,
      last_name:lastName,
      email:email,
      password:password,
      address:residentialAddress,
      latitude:null,
      longitude:null,
      device_token:deviceId,
      device_type: Platform.OS
    };
    this.props.Actions.signupUser(dataToSend,navigation.navigate);
  }

  render(){
    const { navigation } = this.props;
    const {logoImg}=styles;
    return (
      <View style={{ flex: 1}}>
      
         {/* <Background /> */}
         <View style={styles.container}>
          <AuthHeader
            onPress={() => {
              navigation.dispatch(NavigationActions.back())
            }}
          />
           <KeyboardAwareScrollView>
         <ScrollView
          showsHorizontalScrollIndicator={false} 
          showsVerticalScrollIndicator={false}  
          keyboardDismissMode={Platform.OS==='ios' ? 'on-drag' : 'interactive'}
          keyboardShouldPersistTaps='always' 
          contentContainerStyle={{alignItems:'center'}}

        >
       <Logo customStyle={logoImg}/>
        <FormTextInput
                placeHolderText={Constants.i18n.common.firstName}
                onChangeText={firstName => this.setState({ firstName })}
                keyboard="default"
                returnKey="next"
              />
        <FormTextInput
                placeHolderText={Constants.i18n.common.lastName}
                onChangeText={lastName => this.setState({ lastName })}
                keyboard="default"
                returnKey="next"
              />
                 <FormTextInput
                placeHolderText={Constants.i18n.common.emailAddress}
                onChangeText={email => this.setState({  email})}
                keyboard="email-address"
                returnKey="next"
              />
                  <FormTextInput
                placeHolderText={Constants.i18n.common.residentialAddress}
                onChangeText={residentialAddress => this.setState({ residentialAddress })}
                multiline={false}
                maxLength={200}
                keyboard="default"
                returnKey="next"
              />
                 <View style={{width:Constants.BaseStyle.DEVICE_WIDTH}}>
          <Text style={styles.infoText}>
            Max characters limit is 200
          </Text>
          </View>
                <FormTextInput
                placeHolderText={Constants.i18n.password.password}
                onChangeText={password => this.setState({ password })}
                keyboard="default"
                secureText={true}
                returnKey="next"
              />
                <FormTextInput
                placeHolderText={Constants.i18n.password.confirm}
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                keyboard="default"
                secureText={true}
                returnKey="done"
              />
          <FormSubmitButton
             _Press={() => this.signUpSubmit()}
                text={Constants.i18n.common.signup}
              />
              </ScrollView>
              </KeyboardAwareScrollView>
              </View>
           </View>
  
    );
 }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',

  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  text: {
    color:Constants.Colors.primary,
    fontSize: 18,
    fontWeight: '200',
    ...Constants.Fonts.normal
  },
  infoText:{
    backgroundColor:Constants.Colors.Transparent,
    color:Constants.Colors.Black,
    ...Constants.Fonts.smallSize,
    textAlign:'right',
    marginRight:Constants.BaseStyle.DEVICE_WIDTH * 10/ 100
  },
  logoImg:{
    marginTop: 20,
    height: Constants.BaseStyle.DEVICE_HEIGHT*.10,
    width: Constants.BaseStyle.DEVICE_HEIGHT*.10,
  }
};
const mapStateToProps = state => ({
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
