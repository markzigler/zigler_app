/**
Author: Gurtej Singh
Date 28th march 2018
purpose :safe view for the iPhoneX
 */

import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Constants from '../../constants';
const SafeView = (props) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor:Constants.Colors.primary,
  }
};

export { SafeView };
