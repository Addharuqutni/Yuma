import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {StackNavigator} from 'react-navigation'

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.instructions}>WELCOME TO MY PROFILE</Text>
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 25
  },
});