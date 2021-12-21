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
import RadialGradient from 'react-native-radial-gradient';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PieChart } from "react-native-feather";
import FeatherIcon from 'react-native-vector-icons/Feather'
import { ThemeColors } from 'react-navigation';

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
<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>

    <NavigationContainer>
      <Header/>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 40,
        right: 40,
        elevation: 0,
        backgroundColor: '#cccccc',
        borderRadius: 15,
        height: 60,
        paddingVertical: 10,
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
    </NavigationContainer>
  </LinearGradient>
  )
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});



export default App;
