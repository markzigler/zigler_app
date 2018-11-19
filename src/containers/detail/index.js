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
  Alert
} from "react-native";

import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { Header, SafeView, FormSubmitButton } from '../../components/common';
import Constants from '../../constants';
import Common from '../../utilities/common';
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
class Detail extends Component<{}> {
  constructor(props) {

    super(props);
    this.state = {

    };

  }
  componentDidMount(){
    const { navigation ,auth} = this.props;
    const {access_token}=auth.user;
    const data=navigation.state.params.data;
    const {symbol_id}=data;
    const dataToSend={
      access_token:access_token,
      symbol_id:symbol_id
    }
    this.props.Actions.getShareDetail(dataToSend);
  }

  GoToBuySellScreen(Type){
    const { navigation } = this.props;
    const data=navigation.state.params.data;
    const {shareDetail}=this.props.shareDetailData;
    navigation.navigate('BuySellShares',{type:Type,data,shareDetail});
  }
  buttonsView(){
    let {shareDetail}=this.props.shareDetailData;
    let {sum_no_of_shares_buy,sum_no_of_shares_sell}=shareDetail;
    sum_no_of_shares_buy=sum_no_of_shares_buy===null?0:sum_no_of_shares_buy;
    sum_no_of_shares_sell=sum_no_of_shares_sell===null?0:sum_no_of_shares_sell;
    const avialableShare=parseInt(sum_no_of_shares_buy)-parseInt(sum_no_of_shares_sell);
    console.log(avialableShare);
    if(shareDetail==null)return null
    return(
      <View style={{alignItems:'center',marginTop:20}}>
      <FormSubmitButton
        _Press={() => {
          this.GoToBuySellScreen("BUY")
         }}
        text={"BUY"}
      />
      {avialableShare>0?
    <FormSubmitButton
    
        buttonStyle={{ backgroundColor: Constants.Colors.orange }}
        _Press={() => {
          this.GoToBuySellScreen("SELL")
         }}
        text={"SELL"}
      />:null}

    </View>
    )
  }
  render() {
    console.log(this.props);
    const { navigation } = this.props;
    const type=navigation.state.params.type;
    const {
      mainWarapper,
      regularText,
      LargeText,
      mediumText,
      middleWrapper,
      red,
      green,
      borderTopBottom,
      middleLeftView,
      middleLeftViewTxt1
      } = styles;
      const data=navigation.state.params.data.item;
      const { companyName,changePercent,symbol,latestPrice ,latestTime,change,sector} = data;
      const PercentColorClass=Common.isNumberPositive(changePercent)?styles.green:styles.red;
    return (
      <SafeView>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Header
            text={symbol}
            isBack={true}
            onPress={() => {
              navigation.dispatch(NavigationActions.back())
            }}
          />
          <View style={mainWarapper}>
          <ScrollView>
            <View style={{ flexDirection: 'row', }}>
              <Text numberOfLines={1} style={[regularText]}>
                Last Trade
              </Text>
              <Text numberOfLines={1} style={[regularText, { fontWeight: '500' }]}>
               {latestTime}
              </Text>
            </View>
            <View style={middleWrapper}>
              <Text numberOfLines={1} style={LargeText}>
                ${latestPrice}
              </Text>
              <View style={{ flex: 2 }}>
                <Text numberOfLines={1} style={[mediumText,PercentColorClass]}>
                 {changePercent}%
              </Text>
                <Text numberOfLines={1} style={[regularText, { margin: 0 }]}>
                 {change}
              </Text>
              </View>
            </View>
            <View style={[middleWrapper, borderTopBottom]}>
              <View style={middleLeftView}>
                <Text numberOfLines={1} style={[regularText, middleLeftViewTxt1]}>
               Company Name
              </Text>
                <Text numberOfLines={1} style={[regularText, { margin: 0 }]}>
                 {companyName}
              </Text>
              </View>
              <View style={{ flex: 1 ,paddingLeft:10}}>
                <Text numberOfLines={1} style={[regularText, middleLeftViewTxt1]}>
                  Sector
              </Text>
                <Text numberOfLines={1} style={[regularText,{ margin: 0 }]}>
                 {sector}
              </Text>
              </View>
            </View>
            {this.buttonsView()}
            </ScrollView>
          </View>
        
        </View>
      </SafeView>
    )
  }

}

const styles = {
  mainWarapper: {
    flex: 1,
    margin: 20
  },
  regularText: {
    margin: 10,
    textAlign: 'left',
    color: Constants.Colors.Black,
    ...Constants.Fonts.content_bold
  },
  mediumText: {
    color: Constants.Colors.Black,
    textAlign: 'left',
    fontWeight: '500',
    ...Constants.Fonts.content_bold,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LargeText: {
    flex: 3,
    color: Constants.Colors.Black,
    textAlign: 'left',
    ...Constants.Fonts.headers_bold,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  middleWrapper: {
    flexDirection: 'row',
    marginTop: 20,

  },
  borderTopBottom: {
    borderTopColor: Constants.Colors.borderColor,
    borderBottomColor: Constants.Colors.borderColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10
  },
  green: {
    color: Constants.Colors.primary,
    margin: 0
  },
  red: {
    color: Constants.Colors.red,
    margin: 0
  },
  middleLeftView:{ 
    flex: 1 ,
     borderRightColor: Constants.Colors.borderColor,
    borderRightWidth: 2
  },
  middleLeftViewTxt1:{ opacity: .7, margin: 0, marginBottom: 10 }
}

const mapStateToProps = state => ({
shareDetailData:state.shareDetail,
auth:state.auth
});

const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
