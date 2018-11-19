/**
Author: Gurtej Singh
Date 28th march 2018
Purpose :Display list view the portfolio header item
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
import { connect } from "react-redux";
import Constants from '../../constants'
import { Card, CardSection } from '../../components/common';
import { SmallButton } from './SmallButton';
import Common from "../../utilities/common";
class ListItem extends Component<{}> {
    constructor(props) {

        super(props);
        this.state = {

        };

    }
    largeView() {
        let {sum_no_of_shares_buy,sum_no_of_shares_sell,symbol,quote}=this.props.rowData.item;
        let total=sum_no_of_shares_buy-sum_no_of_shares_sell;
        return (
        <View style={{ flexDirection: 'row',margin:5}}>
        <Text numberOfLines={1} style={[styles.textLarge,{textAlign:'left',paddingLeft:25}]}>
          {symbol}
        </Text>
        <Text numberOfLines={1} style={[styles.textLarge,{textAlign:'right',paddingRight:25}]}>
          {total}
        </Text>
        </View>
        )
    }
    cardSubHeading() {
        return (
            <View style={{ flexDirection: 'row',margin:5}}>
                {/* <Text numberOfLines={1} style={styles.text}>
                </Text> */}
                <Text numberOfLines={1} style={styles.text}>
                  Value
                </Text>
                <Text numberOfLines={1} style={styles.text}>
                  Daily
                </Text>
                <Text numberOfLines={1} style={styles.text}>
                  High/Low
                </Text>
            </View>
        )
    }
    MainView() {
        let {quote}=this.props.rowData.item;
        const {change,latestPrice,high} = quote;
        const changeColorClass=Common.isNumberPositive(change)?styles.green:styles.red;
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                {/* <SmallButton
                    containerStyle={styles.GreenButtonWrapper}
                    textStyle={styles.GreenButtonTxt}
                    text={"Now"}
                /> */}
                <Text numberOfLines={1} style={styles.textContent}>
                 ${latestPrice}
                </Text>
                <Text numberOfLines={1} style={[styles.textContent, changeColorClass]}>
                 {change}
                </Text>
                <Text numberOfLines={1} style={[styles.textContent, styles.green]}>
                   ${high}
                </Text>
            </View>
        )
    }
    SubView() {
        let {quote}=this.props.rowData.item;
        const {changePercent,low} = quote;
        const changePercentColorClass=Common.isNumberPositive(changePercent)?styles.green:styles.red;
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                {/* <SmallButton
                    containerStyle={styles.RedButtonWrapper}
                    textStyle={styles.RedButtonTxt}
                    text={"Start"}
                /> */}
                <Text numberOfLines={1} style={styles.text}>
                
                </Text>
                <Text numberOfLines={1} style={[styles.text,changePercentColorClass]}>
                  {changePercent}%
                </Text>
                <Text numberOfLines={1} style={[styles.text]}>
                   ${low}
                </Text>
            </View>
        )
    }
    render() {
        const { navigation } = this.props;
        const {item}=this.props.rowData;
        const {symbol_id}=item;
        const dataProps={
            symbol_id:symbol_id,
            item:item.quote
        }
        return (
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={()=>{
                navigation.navigate('Detail',{data:dataProps,type:'portfolio'});
            }}
            >
            <Card>
                {this.largeView()}
                {this.cardSubHeading()}
                {this.MainView()}
                {this.SubView()}
            </Card>
            </TouchableOpacity>

        )
    }
}
const styles = {
    text: {
        flex: 2,
        textAlign: 'center',
        color: Constants.Colors.Gray,
        ...Constants.Fonts.normal,

    },
    textLarge: {
        flex: 2,
        textAlign: 'center',
        color: Constants.Colors.Black,
        fontWeight: '600',
        ...Constants.Fonts.headers
    },
    textContent:{
        flex: 2,
        textAlign: 'center',
        color: Constants.Colors.Black,
        fontWeight: '600',
        ...Constants.Fonts.content_bold
    },
    green: {
        color: Constants.Colors.primary
    },
    red: {
        color: Constants.Colors.red
    },
    GreenButtonWrapper:{
        borderColor: Constants.Colors.primary,
        backgroundColor: Constants.Colors.primary
    },
    GreenButtonTxt:{
        color: Constants.Colors.White,
    },
    RedButtonWrapper:{
        borderColor: Constants.Colors.Gray,
        backgroundColor: Constants.Colors.White
    },
    RedButtonTxt:{
        color: Constants.Colors.Black,
        
    }
}

export {ListItem};