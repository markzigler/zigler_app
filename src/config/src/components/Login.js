import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { login } from "../actions/LoginAction";
import FBSDK from 'react-native-fbsdk' ;
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
const {
  LoginButton,
  AccessToken,
  LoginManager
} = FBSDK;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "peter@klaven",
      password: "cityslicka"
    };
  }

  handleSubmit() {
    this.props.login();
  }

  _googleAuth(){
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      // play services are available. can now configure library
      // GoogleSignin.currentUserAsync().then((user) => {
      //   alert("got response");
      //   console.log('USER', user);
      //   this.setState({user: user});
      // }).done();
      GoogleSignin.configure({
        iosClientId:'248951603278-n76s2fll8kokc931od01h4ukgng5l2dt.apps.googleusercontent.com', 
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
        offlineAccess: true,
        webClientId:"AIzaSyBDnwPxin8732mBSHYbdJcpRgNFnGTDmPY"
      })
      .then(() => {
        // you can now call currentUserAsync()
        GoogleSignin.signIn()
.then((user) => {
  alert("success");
  console.log(user);
  this.setState({user: user});
})
.catch((err) => {
  alert("error");
  console.log('WRONG SIGNIN', err);
})
.done();
      });

  })
  .catch((err) => {
    console.log("Play services error", err.code, err.message);
  })
  }
  _fbAuth = ()=>{
    let context = this;
    LoginManager.logInWithReadPermissions(['public_profile','email']).then((result)=> {
        if (result.isCancelled) {

        } else {
          //console.log('testttt',result)
          AccessToken.getCurrentAccessToken().then((data) => {
            fetch('https://graph.facebook.com/v2.11/me?fields=id,first_name,last_name,picture,gender,email&access_token=' + data.accessToken.toString())
            .then((response) => response.json())
            .then((fbRes) => {
              console.log("fbRes->",fbRes);
            // fbRes = { ...fbRes,
            //             type :'2',
            //             picture:fbRes.picture.data.url,
            //             firstname:fbRes.first_name,
            //             lastname:fbRes.last_name,
            //             mobile:'',
            //             email:`${fbRes.id}@facebook.com`,
            //             socialId:`fb_${fbRes.id}`,
            //           }
            //   delete fbRes.first_name;
            //   delete fbRes.last_name;
            //   delete fbRes.id;
            //   this.props.startLoading();
            //   context.props.register(fbRes,()=>{
            //     this.props.stopLoading();
            //     context.props.navigation.dispatch( reset(0,'dashBoard') );
            //   })

            })
            .catch((error) => {
           //   console.log('error',error)
            })

          })
          
        }
      }, function(error) {
      //   console.log("some error occurred!!");
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Email :</Text>
        <TextInput
          style={{
            margin: 10,
            borderBottomColor: "#dadada",
            borderBottomWidth: 1
          }}
          value={this.state.email}
          onChangeText={email => {
            this.setState({ email });
          }}
          placeholder="email"
        />
        <Text style={{ margin: 10 }}>Password :</Text>
        <TextInput
          style={{
            margin: 10,
            borderBottomColor: "#dadada",
            borderBottomWidth: 1
          }}
          value={this.state.password}
          onChangeText={password => {
            this.setState({ password });
          }}
          placeholder="password"
        />
        {this.props.loginReducer.loading ? (
          <TouchableOpacity style={{ margin: 10, alignItems: "center" }}>
            <ActivityIndicator />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ margin: 10, alignItems: "center" }}
            onPress={() => {
              this.handleSubmit();
            }}
          >
            <Text style={{ margin: 10 }}>Login</Text>
          </TouchableOpacity>
        )}
               <TouchableOpacity
            style={{ margin: 10, alignItems: "center" }}
            onPress={() => {
              this._fbAuth();
            }}
          >
            <Text style={{ margin: 10 }}>facebook login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ margin: 10, alignItems: "center" }}
            onPress={() => {
              this._googleAuth();
            }}
          >
            <Text style={{ margin: 10 }}>google login</Text>
          </TouchableOpacity>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  }
});

function mapUser(state) {
  return { loginReducer: state.loginReducer };
}

export default connect(mapUser, { login })(Login);
