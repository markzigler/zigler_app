/*
 * @file: navigation.js
 * @description: Navigation bar common methods
 * @date: 27 march 2018
 * @author: Gurtej Singh
 * */

export const getNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
});

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  headerLeft,
});

export const getDrawerNavigationOptions = (title, backgroundColor, titleColor, drawerIcon) => ({
  title,
  headerTitle: title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color: titleColor,
  },
  headerTintColor: titleColor,
  drawerLabel: title,
  drawerIcon,
});

export const getDrawerConfig = (drawerWidth, drawerPosition, initialRouteName) => ({
  drawerWidth,
  drawerPosition,
  initialRouteName,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});
