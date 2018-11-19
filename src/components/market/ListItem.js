/**
Author: Gurtej Singh
Date 28th march 2018
Purpose :Display list view the the market item
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
import { Card } from '../../components/common';
import Common from '../../utilities/common'
class ListItem extends Component<{}> {
    constructor(props) {

        super(props);
        this.state = {

        };

    }
    largeView() {
        const { companyName,changePercent,symbol,latestPrice ,latestTime} = this.props.rowData.item;
        const PercentColorClass=Common.isNumberPositive(changePercent)?styles.green:styles.red;
        return (
            <View style={{ margin: 5, borderBottomColor: Constants.Colors.BlurGrey, borderBottomWidth: 1, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text numberOfLines={1} style={[styles.textLarge, { textAlign: 'left', paddingLeft: 25 }]}>
                        {symbol}
            </Text>
                    <Text numberOfLines={1} style={[styles.textLarge, { textAlign: 'left', paddingLeft: 25 },PercentColorClass]}>
                        {changePercent}%
            </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text numberOfLines={1} style={[styles.text, {  flex: 1 ,textAlign: 'left', paddingLeft: 25 }]}>
                     {companyName}
            </Text>
                    <Text numberOfLines={1} style={[styles.text, { flex: 1 , textAlign: 'left', paddingLeft: 25 }]}>
                       {latestTime}
            </Text>
                </View>
            </View>
        )
    }
    cardSubHeading() {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text numberOfLines={1} style={[styles.text,{textAlign:'left',marginLeft:25}]}>
                    Price
                </Text>
                <Text numberOfLines={1} style={[styles.text,{textAlign:'left',marginLeft:25}]}>
                    Change
                </Text>
              
            </View>
        )
    }
    MainView() {
        const {latestPrice,change} = this.props.rowData.item;
        const changePriceColorClass=Common.isNumberPositive(change)?styles.green:styles.red;
        return (
            <View>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text numberOfLines={1} style={[styles.textLarge,{textAlign:'left',marginLeft:25}]}>
               ${latestPrice}
            </Text>
            <Text numberOfLines={1} style={[styles.textLarge,changePriceColorClass,{textAlign:'left',marginLeft:25}]}>
               {change}
            </Text>
            </View>
            
            </View>
        )
    }

    render() {
        const { navigation } = this.props;
        const {item}=this.props.rowData;
        const {symbol_id}=item;
        const dataProps={
            symbol_id:symbol_id,
            item:item
        }
        return (
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={()=>{
                navigation.navigate('Detail',{data:dataProps,type:'market'});
            }}
            >
            <Card>
                {this.largeView()}
                {this.cardSubHeading()}
                {this.MainView()}
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
    textContent: {
        flex: 2,
        textAlign: 'center',
        color: Constants.Colors.Black,
        fontWeight: '600',
        ...Constants.Fonts.normal
    },
    green: {
        color: Constants.Colors.primary
    },
    red: {
        color: Constants.Colors.red
    }
}

export { ListItem };