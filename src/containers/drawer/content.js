/*
 * @file: content.js
 * @description: render left button menus
 * @date: 26.03.2017
 * @author: Gurtej singh
 * */

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
  Alert
} from 'react-native';
import React, { Component } from 'react';
import Constants from "../../constants";
import DrawerItem from '../../components/common/drawerItem';
import {DrawerHeader} from '../../components/common';
import {NavigationActions} from 'react-navigation';
import * as Actions from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const iconSize=40;
const MyPortfolioIcon=(<Image source={Constants.Images.common.portfolio}  style={{width:iconSize, height:iconSize}}/>);
const MarketIcon=(<Image source={Constants.Images.common.market}  style={{width:iconSize, height:iconSize}}/>);
const OrderHistoryIcon=(<Image source={Constants.Images.common.order}  style={{width:iconSize, height:iconSize}}/>);
const MyProfileIcon=(<Image source={Constants.Images.common.profile}  style={{width:iconSize, height:iconSize}}/>);
const HelpIcon=(<Image source={Constants.Images.common.help}  style={{width:iconSize, height:iconSize}}/>);
const LogoutIcon=(<Image source={Constants.Images.common.logout}  style={{width:iconSize, height:iconSize}}/>);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.primary,
  }
});
class DrawerContent extends Component {
  
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      <DrawerHeader
       onPress={() => {
    
          navigation.navigate('DrawerClose');
      }}
      />
      <DrawerItem
      icon={MyPortfolioIcon}
      text={"My Porfolio"}
      onPress={() => this.onItemPress('Porfolio')}
      />
      <DrawerItem
      icon={MarketIcon}
      text={"Market"}
      onPress={() => this.onItemPress('Market')}
      />
      <DrawerItem
      icon={OrderHistoryIcon}
      text={"Order History"}
      onPress={() => this.onItemPress('OrderHistory')}
      />
        <DrawerItem
      icon={MyProfileIcon}
      text={"Profile"}
      onPress={() => this.onItemPress('Profile')}
      />
      <DrawerItem
      icon={HelpIcon}
      text={"Help"}
      onPress={() => this.onItemPress('Help')}
      />
      <DrawerItem
      icon={LogoutIcon}
      text={"Logout"}
      onPress={() => {
       this.logout();
      }}
      />
      </View>
    );
  }
  logout(){
    let {deviceId}=this.props.app;
    let {access_token}=this.props.auth.user;
    const { navigation } = this.props;
    let dataToSend={
      access_token:access_token,
      device_token:deviceId,
      device_type:Platform.OS,
    }
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        {text: 'OK', onPress: () =>  this.props.Actions.logOut(dataToSend,navigation)},
      ],
      { cancelable: false }
    )
  }
  onItemPress(key) {
    const { navigation } = this.props;
    navigation.navigate(key);
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  app:state.app
});
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
