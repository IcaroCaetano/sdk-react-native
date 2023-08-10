/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-gesture-handler";
import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 

function App(): JSX.Element {
  return (
     <NavigationContainer>
        <View>
          <Text>
              HOME
          </Text>
        </View>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#000"
  }
});


export default App;
