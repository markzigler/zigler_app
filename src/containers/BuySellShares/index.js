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
import { Header, SafeView, FormSubmitButton, FormTextInput } from '../../components/common';
import Constants from '../../constants';
import { bindActionCreators } from "redux";
import * as Actions from "../../actions";
import Regex from "../../utilities/Regex";
import Idx from "../../utilities/Idx";
import _ from "lodash";
import Common from "../../utilities/common";
var moment = require('moment');
class BuySellShares extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      numberOfShares: ""
    };
  }
  hitAPI() {
    const { navigation,auth,shareDetailData } = this.props;
    const { type,data } = navigation.state.params;
    const{symbol,latestPrice}=data.item;
    const {access_token}=auth.user;
    let { numberOfShares } = this.state;
    let { shareDetail } = this.props.shareDetailData;
    let { sum_no_of_shares_buy, sum_no_of_shares_sell,symbol_id } = shareDetail;
    sum_no_of_shares_buy=sum_no_of_shares_buy===null?0:sum_no_of_shares_buy;
    sum_no_of_shares_sell=sum_no_of_shares_sell===null?0:sum_no_of_shares_sell
    let avialableShare = parseInt(sum_no_of_shares_buy) - parseInt(sum_no_of_shares_sell);
    let {
      numberValidateCheck,
      numberExceeds,
      numerVal
    } = Constants.i18n.buysell;
      console.log(numberOfShares);
      if (_.isEmpty(numberOfShares)||numberOfShares==0) {
        Common.ShowToast(numberValidateCheck);
        return;
      }
    if (
      !Regex.validateNumbers(numberOfShares.trim())
    ) {
      Common.ShowToast(numerVal);
      return;
    }
    if (type !== "BUY" && avialableShare < parseInt(numberOfShares)) {
      Common.ShowToast(numberExceeds);
      return;
    }
    let dataToSend={
      access_token:access_token,
      symbol_id:symbol_id,
      no_of_shares:parseInt(numberOfShares),
      price_per_share:latestPrice,
      type:type =="BUY"?0:1
    }
    console.log(JSON.stringify(dataToSend));
    this.props.Actions.buySellSharesApi(dataToSend,navigation)
  }
  render() {
    const { navigation } = this.props;
    const { type, data } = navigation.state.params;
    const { item } = data;
    const { latestVolume, symbol, latestPrice, latestTime } = item;
    let { shareDetail } = this.props.shareDetailData;
    let { sum_no_of_shares_buy, sum_no_of_shares_sell } = shareDetail;
    sum_no_of_shares_buy=sum_no_of_shares_buy===null?0:sum_no_of_shares_buy;
    sum_no_of_shares_sell=sum_no_of_shares_sell===null?0:sum_no_of_shares_sell
    let avialableShare = parseInt(sum_no_of_shares_buy) - parseInt(sum_no_of_shares_sell);
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
      middleLeftViewTxt1,
      subHeader
      } = styles;
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
            <View style={[subHeader]}>
              <View style={middleLeftView}>
                <Text style={[regularText, { margin: 0, marginTop: 10 }]}>
                  ${latestPrice}
                </Text>
                <Text style={[regularText, middleLeftViewTxt1, { marginTop: 5 }]}>
                  Price per share
              </Text>
              </View>
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text style={[regularText, green, { margin: 0, textAlign: 'right', marginRight: 10, marginTop: 10 }]}>
                {type == "BUY" ? latestVolume:avialableShare}
              </Text>
                <Text style={[regularText, middleLeftViewTxt1, { textAlign: 'right', marginRight: 10, marginTop: 5 }]}>
                  {type == "BUY" ? "Latest Volume" : "Your Shares"}
                </Text>
              </View>
            </View>
            <ScrollView
              contentContainerStyle={{
                margin: 10
              }}
            >
              <FormTextInput
                placeHolderText={Constants.i18n.buysell.numberShare}
                onChangeText={numberOfShares => this.setState({ numberOfShares })}
                value={this.state.numberOfShares}
                focusColor={Constants.Colors.Gray}
                style={{ borderBottomColor: Constants.Colors.Gray }}
                inputStyle={styles.inputStyle}
                keyboard="numeric"
                returnKey="done"
              />
              <View style={{ alignItems: 'center' }}>
                {type == "BUY" ?
                  <FormSubmitButton
                  _Press={() => { this.hitAPI() }}
                    text={"BUY"}
                  /> :
                  <FormSubmitButton
                    buttonStyle={{ backgroundColor: Constants.Colors.orange }}
                    _Press={() => { this.hitAPI() }}
                    text={"Sell"}
                  />}
                <Text style={[regularText, { textAlign: 'center' }]}>Transaction date: {moment().format('MMMM Do YYYY')}</Text>
              </View>
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
  },
  subHeader: {
    borderBottomColor: Constants.Colors.borderColor,
    borderBottomWidth: 3,
    flexDirection: 'row',
    paddingBottom: 5

  },
  inputStyle: {
    color: Constants.Colors.Black
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
  middleLeftView: {
    flex: 1,
    marginLeft: 10
  },
  middleLeftViewTxt1: { opacity: .7, margin: 0, marginBottom: 10 },


}

const mapStateToProps = state => ({
  shareDetailData: state.shareDetail,
  auth: state.auth
});
const mapDispatchToProps = dispatch => ({
  Actions: bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(BuySellShares);
