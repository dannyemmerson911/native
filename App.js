/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Input from './components/input';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>
            Test Android Application
          </Text>
          <Text style={styles.instructions}>
            Answer my questions so I can know everything about you
          </Text>
          <Input />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    
  },
  container: {
    height: 600,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  welcome: {
    marginTop: 50,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginTop: 20,
    padding: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
