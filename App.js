/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './Screens/Login';
import Home from './Screens/Home';
import {StackNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>

      );
  }
}

const AppStackNavigator = new StackNavigator({
  Login :{screen: Login},
  Home :{screen: Home},
})

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  }
})