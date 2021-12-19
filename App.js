import * as React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Header from './components/Header';
import apiUrl from './backendAPI/apiConfig';
import { globalStyles } from './styles/global';
import Main from './components/Main';
import Asset from './components/Asset';

function AssetScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Asset')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();


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
    <NavigationContainer>
      <View style={globalStyles.container}>
          <Stack.Navigator initialRouteName='AssetScreen'>
            <Stack.Screen name="AssetScreen" component={AssetScreen} />
            <Stack.Screen name="Asset" component={Asset} />
          </Stack.Navigator>
          
        <ScrollView> 
          <Header getAssets={getAssets}/> 
          <Main assets={assets} setAssets={setAssets}/>
        </ScrollView>
      </View>
    </NavigationContainer>
  )
}
export default App;
