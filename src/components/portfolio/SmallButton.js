import React from 'react';
import { View, Text } from 'react-native';
import Constants from '../../constants'
const SmallButton = (props) => {
    const {containerStyle,text,textStyle}=props;
  return (
    <View style={[styles.containerStyle,containerStyle]}>
     <Text style={[styles.textStyle,textStyle]}>{text}
    </Text>
    </View>
  );
};
const styles = {
  containerStyle: {
      borderRadius: 10,
      borderColor: Constants.Colors.Black,
      borderWidth: 1,
      backgroundColor:Constants.Colors.White,
      width:40,
      height:20,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:25
  },
  textStyle:{
      textAlign:'center',
      color:Constants.Colors.Black,
      ...Constants.Fonts.tinyMedium
  }
};

export { SmallButton };
