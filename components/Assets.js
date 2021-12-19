import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Asset from './Asset';

const Assets = (props) => {

    let assetsMap
    if (props.assets){
        assetsMap = props.assets.map((item, index) => <Text key={index}>{item.name}, {item.symbol}, {item.qty}, {item._id}</Text>)
    }else{
        assetsMap = <Text>Map empty</Text>
    }

    return(
        <View>
            <Text>Assets Page</Text>
            {assetsMap}
            {/* <Asset/> */}
        </View>
    )
}
export default Assets;