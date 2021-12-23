import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import Main from './components/Main';
import AddAsset from './components/AddAsset';
import FeatherIcon from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();
const api = 'https://netfolio-backend.herokuapp.com/assets/'

const App = () => {
  const [assets, setAssets] = useState();
  const getAssets = async () => {
    await fetch(api, {
      method: 'GET'}
    )
    .then((res) => res.json())
    .then((data) => setAssets(data))
  }
  useEffect(() => {
    getAssets();
  }, [tabSwitch])

  const [tabSwitch, setTabSwitch] = useState(false)
  const iconSize = 35;

  return(
    <NavigationContainer>
      <Header/>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#ffc219',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#1F1E2D',
          height: 80,
          flex:1,
          borderTopWidth: 0,
        }
      }}>
            <Tab.Screen 
            name="Portfolio" 
            options={{
              tabBarIcon: (props) => <FeatherIcon style={{height:40, top: 10 }} color={props.color} size={iconSize} name="pie-chart"/>
            }}>
              {props => <Main {...props} api={api} getAssets={getAssets} assets={assets}/>}
            </Tab.Screen>
            <Tab.Screen name="Add Assets" options={{
              tabBarIcon: (props) => <FeatherIcon style={{height:40, top: 10 }} color={props.color} size={iconSize} name="plus-circle"/>
            }}>
              {props => <AddAsset {...props} api={api} setTabSwitch={setTabSwitch} tabSwitch={tabSwitch} getAssets={getAssets} />}
            </Tab.Screen>
        </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App;
