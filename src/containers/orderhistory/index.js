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
import { connect } from "react-redux";
import {Header,SafeView,NoRecord,Spinner} from '../../components/common';
import {ListItem} from '../../components/orderHistory';
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import Constants from '../../constants';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
class OrderHistory extends Component<{}> {
  constructor(props) {
    super(props);
    this.state={
      searchTxt:''
    }
  }
  componentDidMount() {

      this.apiCall("")

  
  }
  apiCall(_symbol,isRefreshing){
    let {access_token}=this.props.auth.user;
    const dataTosend = { symbol: _symbol, access_token:access_token}
    this.props.Actions.getOrderList(dataTosend,isRefreshing);
  }
  performSearch(text){
    clearTimeout(this.typingTimer);// this will cancel the previous timer
    this.setState({
      searchTxt: text
    });
    this.typingTimer = setTimeout( () => {
      this.apiCall(this.state.searchTxt);
    }, 500);
  }
  searchBar(){
 
    return(
    <View style={{alignItems:'center',justifyContent:'center',width:Constants.BaseStyle.DEVICE_WIDTH,marginTop:5,marginBottom:5}}>
    <View style={{height:35,backgroundColor:Constants.Colors.PrimaryLight,width:Constants.BaseStyle.CARD_WIDTH,borderRadius:5,flexDirection:'row'}}>
    <TextInput    underlineColorAndroid="transparent" style={{flex:8.5,color: Constants.Colors.White,marginLeft:5}} value={this.state.searchTxt}  onChangeText={(text) =>this.performSearch(text)}/>
   <View style={{alignItems:'center',justifyContent:'center',flex:1.5}}>
   <EvilIcons name="search" size={30} color={Constants.Colors.White} />
     </View>
    </View>
    </View>)
  }
  render(){
    const { navigation } = this.props;
    const{orderData}=this.props.orderHistoryList;
    let{isListLoading,isRefreshing}=this.props.loader;
    return(
      <SafeView>
      <View style={{flex:1,backgroundColor:'white'}}>
      
       <Header
         text={"Order History"}
       onPress={() => {
        navigation.navigate('DrawerOpen');
      }}
      >
      {this.searchBar()}
      </Header>
     <View style={{ flex: 1 }}>
     {
          isListLoading?
          <View style={{height:40 ,margin:10}}>
          <Spinner/>
          </View>:null
          }
        {orderData.length > 0 ?
       <FlatList
         data={orderData}
         keyExtractor={(item, index) => index}
         refreshing={isRefreshing}
                onRefresh={()=>{
                  this.setState({searchTxt:""});
                  this.apiCall("",true)
                }}
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
  orderHistoryList: state.orderHistoryList,
  auth:state.auth,
  loader:state.loader
});
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);

