import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {StackNavigator} from 'react-navigation'

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.instructions}>WELCOME TO MY PROFILE</Text>
        <Image
        style={{width: 200, height: 200, marginLeft:80, marginTop:80, marginBottom:50}} 
        source={require('./foto.jpg')}
      	/>
        <Text style={styles.nulis}>ADDHARUQUTNI AZZYUMARDI NAWASHARIF</Text>
        <Text style={styles.nulis}>XI RPL 3</Text>
        <Text style={styles.nulis}>02</Text>
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
  nulis: {
  	fontSize: 18,
  	textAlign: 'center',
  	color: '#000000',
  	marginTop: 10
  }
});