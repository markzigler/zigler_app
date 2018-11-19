/*
 * @file: configureStore.js
 * @description: configure redux store
 * @date: 27 march 2018
 * @author: Gurtej singh
 * */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.dev');
} else {
  module.exports = require('./configureStore.prod');
}