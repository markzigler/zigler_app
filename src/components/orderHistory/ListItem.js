/**
Author: Gurtej Singh
Date 28th march 2018
Purpose :Display list view the the order history  item
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
class ListItem extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    largeView() {
        const{created,id,no_of_shares,price_per_share,quote,symbol,symbol_id,total_share,type,user_id,symbol_name}=this.props.rowData.item;
        return (
            <View style={{  margin: 5, borderBottomColor: Constants.Colors.BlurGrey, borderBottomWidth: 1, paddingBottom: 10 }}>
                <Text numberOfLines={1} style={[styles.textLarge, { textAlign: 'left', paddingLeft: 25 }]}>
                    {symbol}
                </Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Text numberOfLines={1} style={[styles.Text,{flex:1,marginLeft:25}]}>
                       {symbol_name}
                </Text>
                <Text numberOfLines={1} style={[styles.Text,{flex:1}]}>
                       Date:{created}
                </Text>
                </View>
            </View>
        )
    }
    cardSubHeading() {
        return (
            <View style={{flex:1, flexDirection: 'row', margin: 5 }}>
                  <Text numberOfLines={1} style={[styles.text]}>
                  Type
                </Text>
                <Text numberOfLines={1} style={[styles.text]}>
                   Quantity
                </Text>
                <Text numberOfLines={1} style={styles.text}>
                   Per Unit
                </Text>
                <Text numberOfLines={1} style={styles.text}>
                    Total Price
                </Text>
            </View>
        )
    }
    MainView() {
        const{created,id,no_of_shares,price_per_share,quote,symbol,symbol_id,total_share,type,user_id}=this.props.rowData.item;
        console.log(type);
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text numberOfLines={1} style={styles.textContent}>
                  {type}
                </Text>
                <Text numberOfLines={1} style={[styles.textContent]}>
                 {no_of_shares}
                </Text>
                <Text numberOfLines={1} style={[styles.textContent]}>
                   ${price_per_share}
                </Text>
                <Text numberOfLines={1} style={[styles.textContent]}>
                   ${price_per_share*no_of_shares}
                </Text>
            </View>
        )
    }
   
    render() {

        return (
            <Card>
                {this.largeView()}
                {this.cardSubHeading()}
                {this.MainView()}
            </Card>


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
        textAlign: 'left',
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