import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from './components/Header';
import apiUrl from './backendAPI/apiConfig';
import { globalStyles } from './styles/global';

const App = () => {
  return(
    <View style={globalStyles.container}>
      <Header title='Shopping List'/>
    </View>
  )
}
export default App;
