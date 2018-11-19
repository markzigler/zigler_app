/**
Author: Gurtej Singh
Date 28th march 2018
purpose :no record found view
 */
import React from 'react';
import { View, ActivityIndicator,Text } from 'react-native';
import Constants from '../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NoRecord = ({ size }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="file-document" size={200} color={Constants.Colors.BlurGrey} />
      <Text style={styles.text}>No record found</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Constants.Colors.White
  },
  text:{
    color: Constants.Colors.BlurGrey,
    ...Constants.Fonts.subtitle_bold,
    textAlign:'center'
  }
};

export { NoRecord };
