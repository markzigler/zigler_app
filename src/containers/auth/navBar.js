
/*
 * @file: navBar.js
 * @description:render left button for the navigation bar
 * @date: 26.03.2017
 * @author: Gurtej singh
 * */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import NavBarItem from '../../components/common/NavBarItem';
import { NavigationActions } from 'react-navigation';
class DrawerMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <NavBarItem
        iconName="chevron-left"
        onPress={() => {
          navigation.dispatch(NavigationActions.back())
          
        }}
      />
    );
  }
}

export default DrawerMenu;
