import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Header from './components/Header';
import apiUrl from './backendAPI/apiConfig';
import { globalStyles } from './styles/global';
import Main from './components/Main';

const App = () => {
// Sate for GET data
const [assets, setAssets] = useState();
// GET
const getAssets = async () => {
  await fetch('http://localhost:4000/assets', {
    method: 'GET'}
  )
  .then((res) => res.json())
  .then((data) => setAssets(data))
}
// useEffect for API call
useEffect(() => {
  getAssets();
}, [])

  return(
    <View style={globalStyles.container}>
      <Header title='Header Title'/>
      <Main assets={assets} setAssets={setAssets}/>
    </View>
  )
}
export default App;
