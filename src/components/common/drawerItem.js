/**
Author: Gurtej Singh
Date 28th march 2018
purpose :render drawer item
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity,StyleSheet,View,Text } from 'react-native';
import Constants from "../../constants";
class DrawerItem extends Component {
  render() {
    const { icon, onPress,text } = this.props;
    return (
       <TouchableOpacity style={styles.drawerItemMainView}  onPress={() => onPress()}> 
       <View style={styles.iconView} >
         {icon}
         </View>
         <View style={styles.drawerItem} >
         <Text style={styles.drawerText}>{text}</Text>
       </View>
       </TouchableOpacity>

    );
  }
  
}
const styles = StyleSheet.create({
    drawerItemMainView:{
      flexDirection:'row',
    },
    drawerItem: {
      flex:3.5,
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor:Constants.Colors.secondary ,
    },
    drawerText:{
      color:Constants.Colors.White,
      fontWeight: 'normal',
      ...Constants.Fonts.largest_bold
    },
    iconView:{
      flex:1.5,
      alignItems:'center',
      justifyContent:'center'
    }
  });
export default DrawerItem;
