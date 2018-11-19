/*
 * @file: index.js
 * @description: For defining and importing all screens/routes for drawer stack
 * @date: 26.03.2017
 * @author: Gurtej singh
 * */
import { DrawerNavigator,SafeAreaView } from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions } from '../../utilities/navigation';
import Porfolio from '../porfolio';
import Market from '../market';
import OrderHistory from '../orderhistory';
import Profile from '../profile';
import Help from '../help';
import {Colors} from '../../constants';
import DrawerContent from './content';
import DrawerMenu from './menu';
import Constants from "../../constants";
const Drawer = DrawerNavigator({
  Porfolio: { screen: Porfolio},
  Market: { screen: Market},
  OrderHistory: { screen: OrderHistory },
  Profile: { screen: Profile},
  Help:{screen:Help}
}, {
  drawerWidth:Constants.BaseStyle.DEVICE_WIDTH,
  drawerPosition: 'left',
  headerMode: 'none',
  initialRouteName: 'Porfolio',
  contentComponent: props => <DrawerContent {...props} />,
});
Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('Menus', Colors.primary, 'white', <DrawerMenu navigation={navigation} />);
export default Drawer;
