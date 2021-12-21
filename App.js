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
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather'

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

const iconSize = 35;

  return(
    
    <NavigationContainer>
      <Header/>
      {/* <LinearGradient Gradient colors={['#201f2e', '#1F1E2D', '#171621']} style={styles.linearGradient}> */}
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#ffc219',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 40,
          right: 40,
          elevation: 0,
          backgroundColor: '#1F1E2D',
          borderRadius: 15,
          height: 60,
          paddingVertical: 10,
          flex:1,
          borderTopWidth: 0,
        }
      }}>
            <Tab.Screen name="Portfolio" options={{
              tabBarIcon: (props) => <FeatherIcon style={{height:40, top: 10 }} color={props.color} size={iconSize} name="pie-chart"/>
            }}>
              {props => <Main {...props} getAssets={getAssets} assets={assets}/>}
            </Tab.Screen>
            <Tab.Screen name="Add Assets" options={{
              tabBarIcon: (props) => <FeatherIcon style={{height:40, top: 10 }} color={props.color} size={iconSize} name="plus-circle"/>
            }}>
              {props => <AddAsset {...props} setTabSwitch={setTabSwitch} tabSwitch={tabSwitch} getAssets={getAssets} />}
            </Tab.Screen>
        </Tab.Navigator>
    {/* </LinearGradient> */}
  </NavigationContainer>
  )
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});



export default App;
