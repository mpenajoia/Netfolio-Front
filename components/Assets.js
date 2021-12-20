import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
import Asset from './Asset';

const Assets = (props) => {
    console.log(props.assets)
    const [netWorth, setNetWorth] = useState([])
    let assetsMap
    // let investedTotal
    if (props.assets){
        // investedTotal = props.assets.map((item,index))

        assetsMap = props.assets.map((item, index) => {
            // console.log(item.invested)
            return(
                <Asset key={index} netWorth={netWorth} setNetWorth={setNetWorth} getAssets={props.getAssets} setAssets={props.setAssets} assets={props.assets} index={index} item={item}/>
                )
                
            })
    }else{
        assetsMap = <Text>Map empty</Text>
    }
    
    return(
        <View>
            <ScrollView>
                <Text>Net Worth: {netWorth}</Text>
                {assetsMap}
            </ScrollView>
        </View>
    )
}
export default Assets;