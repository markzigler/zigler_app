import React from "react";
import { connect } from "react-redux";
import {View,Text} from "react-native";
import { TemplateTag } from "common-tags";
class LandingPageContainer extends React.Component {
  componentDidMount() {}

  render() {
    return(
        <View>
            <Text>
                hello this is landing page
            </Text>
        </View>
    )
  }
}

function mapUser(state) {
  return { loginReducer: state.loginReducer };
}

export default connect(mapUser, {})(LandingPageContainer);
