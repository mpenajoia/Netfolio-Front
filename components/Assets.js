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

    let greenRed
    if(gainLoss > 0){
        greenRed = 'green'
    }else{
        greenRed = 'red'
    }

    return(
        <View style={{paddingTop: 50}}>
            <View style={{alignItems: 'center', backgroundColor: 'transparent', }}>
                <View>    
                    <Text style={styles.assetsBold}>Net Worth: 
                        <Text style={styles.assetsNumbers}> {netWorth.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })}
                        </Text>
                    </Text>
                </View>
                <View >
                    <Text style={styles.assetsBold} >Gain/Loss: 
                        <Text style={[(gainLoss > 0) ? styles.gain : styles.loss]} > {gainLoss.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })}
                        </Text>
                    </Text>
                {/* </View>
                <View> */}
                    <Text style={styles.assetsBold} >Invested Total: 
                        <Text style={styles.assetsNumbers}> {investedSum.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })}
                        </Text>
                    </Text>
                </View>

                <View style={styles.assetsWrapper}>
                    <ScrollView >
                        {assetsMap}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    assetsBold: {
      paddingVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
      fontWeight: '800',
      color: '#ffc219'
    },
    assetsNumbers: {
        color: '#fff'
    },
    gain: {
        color: '#29E7B9',
    },
    loss: {
        color: '#FF4963',
    },
    assetsWrapper: {
        marginVertical: 25,
    },

  });

export default Assets;