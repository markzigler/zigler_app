/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  Alert,
  WebView
} from "react-native";

import {Header} from '../../components/common'
import { connect } from "react-redux";
import Connection from "../../config/Connection";

class Help extends Component<{}> {
  constructor(props) {

    super(props);
    this.state = {

    };

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          text={"Help"}
          onPress={() => {
            navigation.navigate('DrawerOpen');
          }}
        />
        <WebView
          source={{ uri:Connection.getBaseUrl()+'/welcomes/pages/help'}}
        />
      </View>
    )
  }

}



const mapStateToProps = state => ({

});

// const mapDispatchToProps = dispatch => ({
//   UserActions: bindActionCreators(UserActions, dispatch)
// });

export default connect(mapStateToProps, null)(Help);
