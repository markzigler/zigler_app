/**
Author: Gurtej Singh
Date 28th march 2018
purpose :display logo of the app in any view
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Constants from '../../constants';

export default class Logo extends Component<{}> {
  render() {
    const {customStyle}=this.props;

    return (
      <View style={styles.container}>
        <Image source={Constants.Images.common.logo} style={[styles.logoImg,customStyle]} resizeMode='contain' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:Constants.Colors.Transparent,
    alignItems:'center'
  },
  logoImg:{
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT/100 * 8,
    height: Constants.BaseStyle.DEVICE_HEIGHT/100 * 17,
    width: Constants.BaseStyle.DEVICE_WIDTH/100 *35
  }
});
export { Logo };