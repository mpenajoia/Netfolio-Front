import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Header from './components/Header';
import apiUrl from './backendAPI/apiConfig';
import { globalStyles } from './styles/global';


// GET
const getAssets = () => {
  fetch('http://localhost:4000/assets', {
    method: 'GET'}
  )
  .then((res) => res.json())
  .then((data) => console.log(data))
}
const handleButton = () => {
  getAssets()
}

const App = () => {
  return(
    <View style={globalStyles.container}>
      <Header title='Shopping List'/>
      <Button onPress={handleButton} title='Hey'></Button>
    </View>
  )
}
export default App;
