/* *
 * @file: Root.js
 * @description: Adding react navigation and other abilities into the app
 * @date: 26 march 2018
 * @author: Gurtej Singh
 * */

import React, { Component } from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import Navigator from "./config/navigator"
import Constants from './constants';
import strings from './utilities/StringEn';
import { SafeAreaView } from 'react-navigation';
import Progress from './components/common/ProgressHud';
export default class Root extends Component{
  /* *
   * @constructor: Default constructor
   * */
  constructor(props){
    super(props);

  }
  /* *
   * @function: Default render function
   * */
  render(){
    return (
      <View style={styles.container}>
        <Progress/>
        <Navigator/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});