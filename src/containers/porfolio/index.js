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
  FlatList
} from "react-native";




import { ListItem, Footer } from '../../components/portfolio';
import { connect } from "react-redux";
import { Header, SafeView, NoRecord, Spinner } from '../../components/common';
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import Constants from '../../constants';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
class Porfolio extends Component<{}> {
  constructor(props) {

    super(props);
    this.state = {

    };

  }
  componentDidMount() {
    this.apiCall()
  }
  apiCall(_symbol,isRefreshing) {
    let { access_token } = this.props.auth.user;
    const dataTosend = { access_token: access_token}
    this.props.Actions.getPortfolioList(dataTosend,isRefreshing);
  }
  render() {
    const { navigation } = this.props;
    const { portfolioData } = this.props.myPortfolioList;
   
    let { isListLoading,isRefreshing } = this.props.loader;
    return (
      <SafeView>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Header
            text={"My Portfolio"}
            onPress={() => {
              navigation.navigate('DrawerOpen');
            }}
          />
          <View style={{ flex: 1 }}>
            {
              isListLoading ?
                <View style={{ height: 40, margin: 10 }}>
                  <Spinner />
                </View> : null
            }
            {portfolioData.length > 0 ?
              <FlatList
                data={portfolioData}
                refreshing={isRefreshing}
                onRefresh={()=>{
                  this.setState({searchTxt:""});
                  this.apiCall("",true)
                }}
                keyExtractor={(item, index) => index}
                renderItem={(rowData) => {
                  return (<ListItem rowData={rowData} navigation={navigation} />)
                }}
                
              /> : <NoRecord />
            }
          </View>
       
        </View>

      </SafeView>
    )
  }

}


const mapStateToProps = state => ({
  myPortfolioList: state.myPortfolioList,
  loader: state.loader,
  auth:state.auth
});
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Porfolio);
