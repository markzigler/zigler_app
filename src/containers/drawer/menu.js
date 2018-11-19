
/*
 * @file: menu.js
 * @description: render menu button to show hide drawer
 * @date: 26.03.2017
 * @author: Gurtej singh
 * */

import { connect } from 'react-redux';
import React, { Component } from 'react';
import NavBarItem from '../../components/common/NavBarItem';
class DrawerMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <NavBarItem
        iconName="bars"
        onPress={() => {
          if (navigation.state.index === 0) {
            // check if drawer is not open, then only open it
            navigation.navigate('DrawerOpen');
          } else {
            // else close the drawer
            navigation.navigate('DrawerClose');
          }
        }}
      />
    );
  }
}

export default DrawerMenu;
