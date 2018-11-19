/*
 * @file: Fonts.js
 * @description: App Fonts
 * */

'use-strict';
import BaseStyle from './BaseStyle';
import { Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from "../helpers/ResponsiveFonts";

var Fonts = {
    normal:{
      fontSize:moderateScale(14),
      fontFamily:'Oxygen-Regular',
    },
    bold:{
      fontSize:moderateScale(14),
      fontFamily:'Oxygen-Bold',
    },
    content:{
      fontSize:moderateScale(16),
      fontFamily:'Oxygen-Regular',
    }
}

module.exports = Fonts
