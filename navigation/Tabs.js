import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App from '../App';
import AddAsset from '../components/AddAsset';
import Assets from '../components/Assets';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Assets" component={Assets} />
            <Tab.Screen name="Add" component={AddAsset} />
        </Tab.Navigator>
    )
}

export default Tabs;