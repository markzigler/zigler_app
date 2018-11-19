/*
 * @file: Fonts.js
 * @description: App Fonts
 * */

'use-strict';
import BaseStyle from './BaseStyle';
import { Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from "../utilities/ResponsiveFonts";

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
    },
    contentBold:{
      fontSize:moderateScale(16),
      fontFamily:'Oxygen-Bold',
    },
    subtitle:{
      fontSize:moderateScale(18),
      fontFamily:'Oxygen-Regular',
    },
    subtitle_bold:{
      fontSize:moderateScale(18),
      fontFamily:'Oxygen-Bold',
    },
    title:{
      fontSize:moderateScale(20),
      fontFamily:'Oxygen-Regular',
    },
    title_bold:{
      fontSize:moderateScale(20),
      fontFamily:'Oxygen-Bold',
    },
    tab_header:{
      fontSize:moderateScale(22),
      fontFamily:'Oxygen-Regular',
    },
    tab_header_bold:{
      fontSize:moderateScale(22),
      fontFamily:'Oxygen-Bold',
    },
    headers:{
      fontSize:moderateScale(25),
      fontFamily:'Oxygen-Bold',
    },
    headers_bold:{
      fontSize:moderateScale(30),
      fontFamily:'Oxygen-Bold',
    },
    text_input:{
      fontSize:moderateScale(16),
      fontFamily:'Oxygen-Regular',
    },
    tiny_bold:{
      fontSize:moderateScale(12),
      fontFamily:'Oxygen-Bold',
    },
    tiny:{
      fontSize:moderateScale(12),
      fontFamily:'Oxygen-Bold',
    },
    tinyMedium:{
      fontSize:moderateScale(11),
      fontFamily:'Oxygen-Regular',
    },
    tinyMedium_bold:{
      fontSize:moderateScale(11),
      fontFamily:'Oxygen-Bold',
    },
    tinyLarge:{
      fontSize:moderateScale(13),
      fontFamily:'Oxygen-Regular',
    },
    tinyLargeBold:{
      fontSize:moderateScale(13),
      fontFamily:'Oxygen-Bold',
    },
    content_bold:{
      fontSize:moderateScale(16),
      fontFamily:'Oxygen-Regular',
    },
    largest: {
      fontSize:moderateScale(22),
      fontFamily:'Oxygen-Regular',
    },
    largest_bold: {
      fontSize:moderateScale(22),
      fontFamily:'Oxygen-Bold',
    },
    mediumSize:{
      fontSize:moderateScale(11),
      fontFamily:'Oxygen-Regular',
      lineHeight : 20
    },
    mediumSizeBold:{
      fontSize:moderateScale(11),
      fontFamily:'Oxygen-Bold',
      lineHeight : 20
    },
    smallSize:{
      fontSize:moderateScale(10),
      fontFamily:'Oxygen-Regular',
      lineHeight : 20
    },
    nav_header:{
      fontSize:moderateScale(17),
      fontFamily:'Oxygen-Bold',
    },
    calendar_text:{
      fontSize:moderateScale(24),
      fontFamily:'Oxygen-Regular',
    },
    calendar_text_bold:{
      fontSize:moderateScale(24),
      fontFamily:'Oxygen-Medium',
    },
    calendar_text_selected:{
      fontSize:moderateScale(28),
      fontFamily:'Oxygen-Regular',
    },
}

module.exports = Fonts
