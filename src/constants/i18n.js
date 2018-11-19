/*
 * @file: i18n.js
 * @description: App i18n Localization
 * */

'use strict';

let Strings = {
  common:{
    username:'Username',
    forgotPwd : "Forgot Password ?",
    name: "Name",
    fullName: "Full name",
    emailAddress: "Email Address",
    enterEmail: "Enter your email address.",
    enterValidEmail: "Enter valid email address.",
    password: "Password",
    enterPassword: "Enter your password.",
    enterValidPassword: "Password should of minimum 6 characters.",
    fullAddress: "Full Address",
    signup:"SIGN UP",
    signin:"SIGN IN",
    changePassword:"Change Password",
    no_internet:"Please check your internet connectivity or our server is not responding.",
    firstName:"First Name",
    lastName:"Last Name",
    email:"Email",
    enterFirstName:'Enter your first name.',
    enterLastName:'Enter your last name.',
    enterResidential :'Enter your residential address.',
    enterConfirmPassword:'Enter your confirm password.',
    enterMatchPassword : "Password and confirm password does not match",
    sendEmail:'Send Email',
    updateProfile:'UPDATE PROFILE',
    newUser:'New User?',
    registerHere:'Register Here',
    residentialAddress:'Residential Address',
    addressCheck:"Maximum limit is 200 characters for address."
  },
  signin:{
    forgotPassword: "Forgot Password?",
    noAccount: "Don't have account?"
  },
  password:{
    password:"Password",
    change:"Change Password",
    forgot:"Forgot Password",
    reset:"Reset Password",
    current:"Current Password",
    newPass:"New Password",
    confirm:"Confirm Password",
    currentPassword:"Please enter current password.",
    newPasskey:"Please enter new password.",
    confirmPasskey:"Please enter confirm password.",
    passwordMatched:"New password does not match the confirm password.",
    save:"Save",
    validatePassword:"Password should be 6-16 characters long and must be alphanumeric.",
    forgotInstructions:"Enter your mobile number below to receive OTP to reset your password."
  },
  buysell:{
    numberShare:'Number of shares',
    pricePerShare:'Price per share',
    numerVal:"Please enter valid value",
    numberValidateCheck:"Please enter number of the shares.",
    numberExceeds:"You do not own enough shares to sell this stock.Please reduce quantity and retry."
  }
}

module.exports = Strings;