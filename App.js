import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignUp from './screens/Signup';


export default class App extends Component {
  render() {
    return (
      
      <SignUp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  heading: {
    fontSize: 36,
    fontWeight: '900',
    width: '100%',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    backgroundColor: '#222',
    width: '90%',
    height: 450,
    marginLeft: '5%',
    marginTop: 75
  },
  cardTitle: {
    color: '#EEE',
    fontSize: 24
  },
  cardHeader: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black'
  },
  cardFooter: {
    position: 'absolute',
    bottom: 0,
    height: 75,
    width: '100%',
    backgroundColor: '#444'
  }
});
