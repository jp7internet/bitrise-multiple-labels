/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import {
   StyleSheet,
   View,
   Text,
 } from 'react-native';

 const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App: () => React$Node = () => {
   return (
     <>
      <View accessibilityLabel="app-root" style={styles.container}>
        <Text style={styles.welcome} accessibilityLabel="text1">This is the ONE Project</Text>
        <Text style={styles.instructions} accessibilityLabel="text2">To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
   </>
   );
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

 export default App;