import React, {Component} from 'react';
import {OnPress, AppRegistry, Button, View, TextInput, StyleSheet, Image, Style, Text} from 'react-native';

export default class Login extends Component{
  
  render() {
    return (
      <View>

      <Image
        style={{width: 100, height: 100, marginLeft:130, marginTop:50}} 
        source={require('./fbb.png')} 
      />
      <Text style={styles.instructions}>Facebook</Text>

      <TextInput
        style={{height: 50, borderColor: 'black', borderWidth: 1}}
        placeholder='Username'
        onChangeText={(text) => this.setState({text})}
      />

      <TextInput
        style={{height: 50, borderColor: 'black', borderWidth: 1}}
        secureTextEntry
        onChangeText={(text) => this.setState({text})}
        placeholder='Password'
      />

      <Button 
        style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
        title="LOGIN"
        color="#BBBBBB"
      />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: '#BBBBBB',
    marginBottom: 100,
    fontWeight: 'bold'
  },
});
