import * as React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import apiUrl from './backendAPI/apiConfig';
import { globalStyles } from './styles/global';
import Main from './components/Main';
import AddAsset from './components/AddAsset';



const Tab = createBottomTabNavigator();


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
}, [tabSwitch])

const [tabSwitch, setTabSwitch] = useState(false)

  return(
    <NavigationContainer>
      <Tab.Navigator>
            <Tab.Screen name="Portfolio">
              {props => <Main {...props} getAssets={getAssets} assets={assets}/>}
            </Tab.Screen>
            <Tab.Screen name="Add Assets">
              {props => <AddAsset {...props} setTabSwitch={setTabSwitch} tabSwitch={tabSwitch} getAssets={getAssets} />}
            </Tab.Screen>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;
