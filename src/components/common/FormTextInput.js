'use strict';

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput
} from 'react-native';
import Constants from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FormTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      focusColor:props.focusColor ? props.focusColor : Constants.Colors.Black,
      borderBottomWidth: 1
    }
  }

  // Function calls the parent class onBlur function
  onBlur() {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onFocus() {
    let colour = this.props.focusColor ? this.props.focusColor : Constants.Colors.Black;
    this.setState({ isFocused: true, focusColor: colour, borderBottomWidth: 2 });
    if (this.props.onFocus)
      this.props.onFocus();
  }

  focus() {
    this.refs.inputBox.focus()
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  render() {
    let {
      headerText, placeHolderText, placeHolderColor,
      keyboard, secureText, returnKey, SubmitEditing,
      isPassword, showPassword, multiline, inputStyle, autoFocus,
      editable, value, imageSource, maximumLength,
      icon,
      iconColor,
      iconSize
    } = this.props;
    iconColor = iconColor ? iconColor : Constants.Colors.Black;
    iconSize = iconSize ? iconSize : 20;
    return (
      <View style={[styles.viewStyle, {
        borderBottomColor: this.state.focusColor,
        borderBottomWidth: this.state.borderBottomWidth
      }, this.props.style]}>
        {/* <View style={styles.iconWrapper}>
       {icon?<Icon name={icon} size={iconSize} color={iconColor} />:null}
       </View> */}
        <TextInput
          ref={"inputBox"}
          autoFocus={autoFocus}
          underlineColorAndroid="transparent"
          style={[styles.inputStyle, inputStyle]}
          autoCapitalize={"none"}
          value={value}
          placeholder={placeHolderText}
          placeholderTextColor={this.state.focusColor}
          keyboardType={keyboard}
          secureTextEntry={secureText}
          editable={editable}
          onChangeText={(text) => this.props.onChangeText(text)}
          onChange={(event) => this.onChange(event)}
          returnKeyType={returnKey}
          autoCorrect={false}
          onSubmitEditing={SubmitEditing}
          onFocus={() => this.onFocus()}
          onBlur={() => this.setState({ isFocused: false, focusColor: this.state.focusColor, borderBottomWidth: 1 })}
          multiline={multiline}
          maxLength={this.props.maximumLength}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10
  },
  viewStyle: {
    flexDirection: 'row',
    marginHorizontal: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
    marginVertical: Constants.BaseStyle.DEVICE_WIDTH * 3 / 100,
    borderBottomColor: Constants.Colors.Black,
    borderBottomWidth: 1
    //marginTop:Constants.BaseStyle.DEVICE_HEIGHT/100*3
  },
  inputStyle: {
    marginHorizontal: Constants.BaseStyle.DEVICE_WIDTH * 2 / 100,
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
    textAlign: 'center',
    color: Constants.Colors.Black,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 75,
    ...Constants.Fonts.normal
  }
});
export { FormTextInput };
