import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
import Asset from './Asset';

const Assets = (props) => {
    let netWorthArr = []
    let netWorth = 0
    let netInvestedArr = []
    let investedSum = 0
    let assetsMap
    if (props.assets){
        assetsMap = props.assets.map((item, index) => {
            netWorthArr.push(item.qty * item.current)
            netInvestedArr.push(item.qty * item.invested)
            return(
                <Asset key={index} getAssets={props.getAssets} setAssets={props.setAssets} assets={props.assets} index={index} item={item}/>
                )
                
            })
    }else{
        assetsMap = <Text>Map empty</Text>
    }
    // determining net worth
    for(let i = 0; i < netWorthArr.length; i++){
        netWorth += netWorthArr[i],
        investedSum += netInvestedArr[i];
    }
    const gainLoss = (netWorth - investedSum)

    return(
        <View>
            <ScrollView >
                <View style={{alignItems: 'center', backgroundColor: 'transparent'}}>
                    <Text>Net Worth: ${netWorth}</Text>
                    <Text>Invested Total: ${investedSum}</Text>
                    <Text>Gain/Loss: ${gainLoss}</Text>
                    {assetsMap}
                </View>
            </ScrollView>
        </View>
    )
}
export default Assets;