/**
 Author:Gurtej
 Description: this is used to managed login funcitonality
 */

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
import { connect } from "react-redux";
import {NavigationActions} from "react-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from "lodash";
import Constants from "../../constants";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import Regex from "../../utilities/Regex";
import Idx from "../../utilities/Idx";
import Common from "../../utilities/common";
import {
  FormTextInput,
  FormSubmitButton,
  Logo,
  Background,
  AuthHeader
} from '../../components/common';
class Login extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email:'', 
      password:'',
      isLoading:false
    };

  }
  SubmitLogin(){
    const { navigation } = this.props;
    let { email, password } = this.state;
    let {deviceId}=this.props.app;
    let {
      enterEmail,
      enterValidEmail,
      enterPassword,
      enterValidPassword
    } = Constants.i18n.common;
    let { navigate, dispatch } = this.props.navigation;
    if (_.isEmpty(email.trim())) {
      Common.ShowToast(enterEmail);
      return;
    }
    if (
      !Regex.validateEmail(email.trim())
    ) {
      Common.ShowToast(enterValidEmail);
      return;
    }
    if (_.isEmpty(password)) {
      Common.ShowToast(enterPassword);
      return;
    }
    if (!Regex.validatePassword(password)) {
      Common.ShowToast(enterValidPassword);
      return;
    }
    const dataToSend={
      email:this.state.email,
      password:this.state.password,
      device_token:deviceId,
      device_type: Platform.OS
    };
    this.props.Actions.loginUser(dataToSend,navigation.navigate);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
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
    
          <Logo />
          <FormTextInput
            placeHolderText={Constants.i18n.common.email}
            onChangeText={email => this.setState({email})}
            keyboard="email-address"
            returnKey="next"
          />
          <FormTextInput
            placeHolderText={Constants.i18n.common.password}
            onChangeText={password => this.setState({password})}
            keyboard="default"
            secureText={true}
            returnKey="done"
          />
          <FormSubmitButton
            _Press={() => this.SubmitLogin()}
            text={Constants.i18n.common.signin}
          />
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={this.gotoForgotPassword.bind(this)}>
              <Text style={styles.text}>
                {Constants.i18n.signin.forgotPassword}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.gotoSingupPage.bind(this)}>
              <Text style={[styles.text,{textDecorationLine:'underline',marginLeft:5}]}>
                {Constants.i18n.signin.noAccount}
              </Text>
            </TouchableOpacity>
          </View>
       </ScrollView>
       </KeyboardAwareScrollView>
       </View>
      </View>

    );
  }
  gotoSingupPage() {
    this.props.navigation.navigate('Singup');
  }
  gotoForgotPassword() {
    this.props.navigation.navigate('ForgotPassword');
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
    backgroundColor:Constants.Colors.Transparent,
    color: Constants.Colors.Black,
    fontSize: 18,
    fontWeight: '200',
    ...Constants.Fonts.normal,
  }
};

const mapStateToProps = state => ({
  app: state.app,
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
