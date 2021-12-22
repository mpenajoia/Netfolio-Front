import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
import Asset from './Asset';

import { SwipeListView } from 'react-native-swipe-list-view';


const Assets = (props) => {

    state = {
        listViewData: []
    }


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
                <Asset gainLoss={gainLoss} key={index} getAssets={props.getAssets} setAssets={props.setAssets} assets={props.assets} index={index} item={item}/>
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
    console.log(props.assets)
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
                    {/* <ScrollView >
                        {assetsMap}
                    </ScrollView> */}

        <SwipeListView
            data={props.assets}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text style={{color: 'white', backgroundColor: 'grey'}}>I am {props.assets ? props.assets[0].symbol : 'Nope'} in a SwipeListView</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                    <Text>Left</Text>
                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        />




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