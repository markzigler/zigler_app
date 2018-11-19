/**
Author: Gurtej Singh
Date 3rd april 2018
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
import { SmallButton } from './SmallButton';
class Footer extends Component<{}> {
    constructor(props) {

        super(props);
        this.state = {

        };

    }
    largeView() {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={[styles.textLarge, { textAlign: 'left', paddingLeft: 25 }]}>
                    Total
        </Text>
                <Text style={[styles.textLarge, { textAlign: 'right', paddingRight: 25 }]}>
                    10
        </Text>
            </View>
        )
    }
    MainView() {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <SmallButton
                    containerStyle={styles.GreenButtonWrapper}
                    textStyle={styles.GreenButtonTxt}
                    text={"Now"}
                />
                <Text style={styles.textContent}>
                    $5,164
                </Text>
                <Text style={[styles.textContent, styles.green]}>
                    +53
                </Text>
                <Text style={[styles.textContent, styles.green]}>
                    +7,312
                </Text>
            </View>
        )
    }
    SubView() {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <SmallButton
                    containerStyle={styles.RedButtonWrapper}
                    textStyle={styles.RedButtonTxt}
                    text={"Start"}
                />
                <Text style={styles.text}>
                    $3,000
                </Text>
                <Text style={[styles.text]}>
                    +53
                </Text>
                <Text style={[styles.text]}>
                    +7,312
                </Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.largeView()}
                {this.MainView()}
                {this.SubView()}
            </View>
        )
    }
}
const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderTopWidth: 2,
        padding: 5,
        marginTop:5
    },
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
        borderColor: Constants.Colors.Black,
        backgroundColor: Constants.Colors.White
    },
    RedButtonTxt:{
        color: Constants.Colors.Black,
        
    }
}

export { Footer };