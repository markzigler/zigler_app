
/**
Author: Gurtej Singh
Date 28th march 2018
purpose :display progress indicator
 */
import React, { Component } from 'react'
import {
    View
} from 'react-native'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
const mapStateToProps = state => ({
  visible: state.loader.isLoading
})

export default connect(
  mapStateToProps
)(Spinner)