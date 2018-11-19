// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity ,Image} from 'react-native';
import Constants from '../../constants';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
// Make a component
const DrawerHeader = (props) => {
  const { textStyle, viewStyleDrawer,leftbar } = styles;
  const { icon, onPress,text } = props;
  //const CrossIcon=(<Image source={Constants.Images.common.cross}  style={{height:30,width:30}}/>);
   const CrossIcon=(<EntypoIcon name="cross" size={50} color={Constants.Colors.White} />);
  return (
    <View style={viewStyleDrawer}>
    <TouchableOpacity style={[leftbar,{marginTop:20}]}
    onPress={() => onPress()}
    >
    {CrossIcon}
    </TouchableOpacity>
    </View>
  );
};
const Header = (props) => {
  const { textStyle, viewStyle,leftbar,AuthLeftbar ,AuthtextStyle} = styles;
  const {onPress,text ,isBack} = props;
  //const MenuIcon=(<Image source={Constants.Images.common.hamburger}  style={{height:20,width:30}}/>);
  const MenuIcon=(<Foundation name="align-left" size={40} color={Constants.Colors.White} />);
  const NavIcon=isBack?(<IoniconsIcon name="ios-arrow-back" size={30} color={Constants.Colors.White} />):MenuIcon;
  const BackTextView=isBack?( <Text style={AuthtextStyle}>Back</Text>):null;
  return (
    <View style={viewStyle}>
    <TouchableOpacity style={AuthLeftbar}
    onPress={() => onPress()}
    >
    {NavIcon}{BackTextView}
    </TouchableOpacity>
    <Text style={textStyle}>
    {text}
    </Text>
    {props.children}
    </View>
  );
};
const AuthHeader = (props) => {
  const { AuthtextStyle, AuthviewStyle,AuthLeftbar } = styles;
  const {onPress } = props;
 const NavIcon=(<IoniconsIcon name="ios-arrow-back" size={30} color={Constants.Colors.Black} />);
  return (
    <View style={AuthviewStyle}>
    <TouchableOpacity style={AuthLeftbar}
    onPress={() => onPress()}
    >
    {NavIcon}
    <Text style={AuthtextStyle}>
   Back
   </Text>
    </TouchableOpacity>
 
    </View>
  );
};
const styles = {
  viewStyleDrawer: {
    backgroundColor:Constants.Colors.primary,
    height:70,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 15,
    position: 'relative',
    flexDirection:'column',

  },
  viewStyle: {
    width:Constants.BaseStyle.DEVICE_WIDTH,
    backgroundColor:Constants.Colors.primary,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection:'column',
    paddingTop:20,
    paddingBottom:10
  },
  AuthviewStyle: {
    height:70,
    width:Constants.BaseStyle.DEVICE_WIDTH,
    backgroundColor:Constants.Colors.Transparent,
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection:'row',
  },
  textStyle: {
    color:Constants.Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'left',
    ...Constants.Fonts.headers_bold,
    marginLeft:20,
    fontWeight: '600',
    paddingBottom:5
  },
  AuthtextStyle: {
    color:Constants.Colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'left',
    ...Constants.Fonts.content,
    marginLeft:5 
  },
  leftbar:{
    width:Constants.BaseStyle.DEVICE_WIDTH*.3,
    paddingLeft:20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  AuthLeftbar:{
    width:Constants.BaseStyle.DEVICE_WIDTH*.3,
    marginLeft:20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection:'row'
  }
};

// Make the component available to other parts of the app
export { DrawerHeader,Header,AuthHeader };
