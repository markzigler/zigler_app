/**
Author: Gurtej Singh
Date 28th march 2018
purpose :common file to display card view
 */
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderRadius: 10,
      borderColor: 'transparent',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 3,
      marginLeft:10,
      marginRight:10,
      marginTop:5,
      marginBottom:5,
      padding: 5,
     

  }
};

export { Card };
