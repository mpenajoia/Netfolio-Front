import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Assets = (props) => {

    let assetsMap
    if (props.assets){
        assetsMap = props.assets.map((item, index) => <Text key={index}>{item.name}, {item.symbol}, {item.qty}</Text>)
    }else{
        assetsMap = <Text>Map empty</Text>
    }


    return(
        <View>
            <Text>Assets Page</Text>
            {assetsMap}

        </View>
    )
}
export default Assets;