/**
 Author:Gurtej
 Description: this is used to managed show landing page funcitonality
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
import Constants from "../../constants";
import ReactMixin from "react-mixin";
import TimerMixin from "react-timer-mixin";
import SplashScreen from 'react-native-splash-screen'
import {
  FormSubmitButton,
  Logo,
  Background,
} from '../../components/common';
class Landing extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentDidMount(){
  setTimeout(() => {
    SplashScreen.hide();
  }, 300);
}
  render() {
    const { navigation } = this.props;
    const {container,logoImg,text}=styles;
    return (
      <View style={{ flex: 1 }}>
        <Background />
        <View style={container}>
        <View style={{marginBottom: Constants.BaseStyle.DEVICE_HEIGHT*0.2}}>
        <View style={{marginTop: Constants.BaseStyle.DEVICE_HEIGHT*0.1}}>
          <Logo customStyle={logoImg}/>
          </View>
          </View>
          <FormSubmitButton
            _Press={() => this.gotoLogin()}
            text={Constants.i18n.common.signin}
          />
           <TouchableOpacity onPress={this.gotoSingupPage.bind(this)} style={{flexDirection:'row'}}>
           <Text style={text}>
               {Constants.i18n.common.newUser}
             </Text>
             <Text style={[text,{textDecorationLine:'underline',marginLeft:5}]}>
               {Constants.i18n.common.registerHere}
             </Text>
           </TouchableOpacity>
        </View>
      </View>

    );
  }
  gotoSingupPage() {
    this.props.navigation.navigate('Singup');
  }
  gotoLogin() {
    this.props.navigation.navigate('Login');
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
    ...Constants.Fonts.normal,
    fontWeight: '200'
  },
  logoImg:{
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 8,
    height: Constants.BaseStyle.DEVICE_HEIGHT*.30,
    width: Constants.BaseStyle.DEVICE_HEIGHT*.30,
   
  }
};
ReactMixin(Landing.prototype, TimerMixin);
const mapStateToProps = state => ({

});

// const mapDispatchToProps = dispatch => ({
//   UserActions: bindActionCreators(UserActions, dispatch)
// });

export default connect(mapStateToProps, null)(Landing);
