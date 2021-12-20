import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Asset from './Asset';

const Assets = (props) => {

    let assetsMap
    if (props.assets){
        // this map function should map through the array of objects and return the Asset component, instead of a Text component, with the information of each Asset
        assetsMap = props.assets.map((item, index) => <Asset key={index} assets={props.assets} index={index} item={item}/>)
    }else{
        assetsMap = <Text>Map empty</Text>
    }
    
    // <Text key={index}>{item.name}, {item.symbol}, {item.qty}, {item._id}</Text>
    return(
        <View>
            {/* Put Add Asset Button here */}
            <Text>Assets Page</Text>
            <ScrollView>
            {assetsMap}
            </ScrollView>
        </View>
    )
}
export default Assets;