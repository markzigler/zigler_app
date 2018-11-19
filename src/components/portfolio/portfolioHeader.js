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
import Constants from '../../constants'
const PorfolioHeader=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
               Ticker
                </Text>
                <Text style={styles.text}>
               Value/Cost
                </Text>
                <Text style={styles.text}>
                Daily
                </Text>
                <Text style={styles.text}>
              Total
                </Text>
        </View>
    )
}

const styles = {
container:{
    backgroundColor:Constants.Colors.GhostWhite,
    height:50,
    alignItems:'center',
    flexDirection:'row'
},
text:{
    flex:2,
    textAlign:'center',
    color:Constants.Colors.primary,
    ...Constants.Fonts.normal,
    fontWeight: '600',
    }
  };
export default PorfolioHeader;