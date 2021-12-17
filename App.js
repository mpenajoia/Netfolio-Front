import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Header from './components/Header';
import apiUrl from './backendAPI/apiConfig';
import { globalStyles } from './styles/global';

const App = () => {
// Sate for GET data
const [assets, setAssets] = useState();
// const [check, setCheck] = useState(false)
// GET
const getAssets = async () => {
  await fetch('http://localhost:4000/assets', {
    method: 'GET'}
  )
  .then((res) => res.json())
  .then((data) => setAssets(data))
  .then(setCheck(True))
}
const handleButton = () => {
  // setCheck(true)
  // getAssets()
  console.log(assets)
  console.log(assets[0])
}
// useEffect for API call
useEffect(() => {
  getAssets();
  console.log(assets)
}, [])

  return(
    <View style={globalStyles.container}>
      <Header title='Header Title'/>
      <Button onPress={handleButton} title='GET'></Button>
      {assets  ? <Text>{assets[0].name}</Text> : <Text>Loading</Text>}
    </View>
  )
}
export default App;
