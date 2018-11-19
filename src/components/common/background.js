/**
Author: Gurtej Singh
Date 28th march 2018
purpose :add background image
 */

import React from 'react';
import { Image } from 'react-native';
import Constants from "../../constants";
const Background = () => {
  return (
    <Image source={Constants.Images.common.background} style={styles.containerStyle} /> 
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    resizeMode:'stretch',
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Background };
