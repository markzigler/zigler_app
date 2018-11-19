/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
import {Header,SafeView,FormTextInput,FormSubmitButton} from '../../components/common';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from "lodash";
import Constants from "../../constants";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import Regex from "../../utilities/Regex";
import Idx from "../../utilities/Idx";
import Common from "../../utilities/common";
import { connect } from "react-redux";
class MyProfile extends Component<{}> {
  constructor(props) {
    super(props);
    let {first_name,last_name,address}=this.props.auth.user;
    this.state = {
      firstName:first_name,
      lastName:last_name,
      residentialAddress:address
    };
  }
  UpdateInfo(){
    const { navigation } = this.props;
    let {access_token}=this.props.auth.user;
    let { firstName,lastName, residentialAddress} = this.state;
    let { navigate } = this.props.navigation;
    let { 
      enterFirstName, 
      enterLastName,
      enterResidential,
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
    if(_.isEmpty(residentialAddress.trim())) {
      Common.ShowToast(enterResidential);
      return;
    }
    if (!Regex.validateAddress(residentialAddress)) {
      Common.ShowToast(addressCheck);
      return;
    }
   
    const dataToSend={
      first_name:firstName,
      last_name:lastName,
      address:residentialAddress,
      latitude:null,
      longitude:null,
      access_token:access_token,
    };
    this.props.Actions.updateUserInfo(dataToSend);
  }
  render(){
    const { navigation } = this.props;
    console.log(this.props);
    return(
      <SafeView>
         
      <View style={{flex:1,backgroundColor:'white'}}>
      <Header
         text={"My Profile"}
       onPress={() => {
        navigation.navigate('DrawerOpen');
      }}
      />
         <KeyboardAwareScrollView>
     <ScrollView
     contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode={
        Platform.OS === "ios" ? "on-drag" : "interactive"
      }
      keyboardShouldPersistTaps="always"
      ref="mainScrollView"
    >
    <FormTextInput
            placeHolderText={Constants.i18n.common.firstName}
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
            focusColor={Constants.Colors.Gray}
            style={{ borderBottomColor:Constants.Colors.Gray}}
            inputStyle={styles.inputStyle}
            keyboard="default"
            returnKey="next"
          />
         <FormTextInput
            placeHolderText={Constants.i18n.common.lastName}
            onChangeText={lastName => this.setState({lastName})}
            value={this.state.lastName}
            focusColor={Constants.Colors.Gray}
            style={{ borderBottomColor:Constants.Colors.Gray}}
            inputStyle={styles.inputStyle}
            keyboard="default"
            returnKey="next"
          />
              <FormTextInput
            placeHolderText={Constants.i18n.common.fullAddress}
            focusColor={Constants.Colors.Gray}
            style={{ borderBottomColor:Constants.Colors.Gray}}
            onChangeText={residentialAddress => this.setState({ residentialAddress })}
            value={this.state.residentialAddress}
            maxLength={4}
            inputStyle={styles.inputStyle}
            keyboard="default"
            returnKey="done"
          />
          <View style={{width:Constants.BaseStyle.DEVICE_WIDTH}}>
          <Text style={styles.infoText}>
            Max characters limit is 200
          </Text>
          </View>
       
      <FormSubmitButton
         _Press={() => this.UpdateInfo()}
            text={Constants.i18n.common.updateProfile}
          />
          </ScrollView>
          </KeyboardAwareScrollView>
      </View>
    
      </SafeView>
    )
 }

}

const styles = {
  container:{
    flex:1,
    alignItems:'center'    
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
    color:Constants.Colors.Black,
    ...Constants.Fonts.smallSize,
    textAlign:'right',
    marginRight:Constants.BaseStyle.DEVICE_WIDTH * 10/ 100
  },
  inputStyle:{
    color:Constants.Colors.Black
  }
};

const mapStateToProps = state => ({
  app: state.app,
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
