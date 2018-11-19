import React, { Element } from "react";
import { Scene, Router, Modal, Reducer } from "react-native-router-flux";
import { StatusBar ,View,SafeAreaView} from "react-native";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import ListContainer from "../containers/ListConatiner";
import LandingPage from "../containers/LandingPageContainer";
class Routes extends React.Component {
  render(): Element<*> {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'red'}}>
        <Router>
        <Scene key="root">
          <Scene key="LandingPage" hideNavBar initial component={LandingPage} />
          <Scene key="login" hideNavBar  component={LoginContainer} />
          <Scene key="signup" hideNavBar component={SignupContainer} />
          <Scene key="list" hideNavBar component={ListContainer} />
        </Scene>
      </Router>
      </SafeAreaView>
     
    );
  }
}
export default Routes;
