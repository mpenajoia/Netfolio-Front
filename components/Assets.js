import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Modal} from 'react-native';
import Asset from './Asset';
import SwipeRow from '@nghinv/react-native-swipe-row';
import { SwipeListView } from 'react-native-swipe-list-view';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


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
                
                // <SwipeListView style={{width: 390}} data={[props.assets.length]} renderItem={ (data, rowMap) => (
                //     <Asset gainLoss={gainLoss} key={index} getAssets={props.getAssets} setAssets={props.setAssets} assets={props.assets} index={index} item={item}/>
                //     )}
                //     renderHiddenItem={ (data, rowMap) => (
                //         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                //             <Text style={{color: 'yellow'}}>Left</Text>
                //             <Text style={{color: 'yellow'}}>Right</Text>
                //         </View>
                //     )}
                //     leftOpenValue={75}
                //     rightOpenValue={-75}
                // />
                // <SwipeRow>
                <Asset gainLoss={gainLoss} key={index} getAssets={props.getAssets} setAssets={props.setAssets} assets={props.assets} index={index} item={item}/>
                // {/* </SwipeRow> */}
                
                )
                
            })
    }else{
        assetsMap = <Text>Map empty</Text>
    }

    state = {
        listViewData: [assetsMap]
    }

    // determining net worth
    for(let i = 0; i < netWorthArr.length; i++){
        netWorth += netWorthArr[i],
        investedSum += netInvestedArr[i];
    }
    const gainLoss = (netWorth - investedSum)
    console.log(assetsMap)
    console.log(props.assets)

    const translateX = useSharedValue(0)

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onActive: (event)=> {
            translateX.value = event.translationX
        },
        onEnd: () => {
            translateX.value = 0
        },
    })

    const rStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value
            }
        ]
    }))

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
            {/* <SwipeRow
        left={[
          { title: 'Delete', backgroundColor: 'tomato' },
          { title: 'Edit', },
        ]}
        right={[
          {
            title: 'Edit',
            titleColor: 'blue',
            backgroundColor: '#b388ff',
            
          },
          {
            title: 'Delete',
            backgroundColor: 'tomato',
            
          },
        ]}
        style={{ marginVertical: 1 }}
      > */}
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
            {/* </SwipeRow> */}
                <View style={styles.assetsWrapper}>
                    {/* <ScrollView > */}
                        {/* {assetsMap} */}
                    {/* </ScrollView> */}

        <SwipeListView
        style={{width: 390}}
            data={this.state.listViewData}
            renderItem={ (rowData, rowMap) => (
                <View>
                    <Text>
                        
                    {props.assets ? props.assets[0].name : <Text>No</Text>}
                    {props.assets ? props.assets[1].name : <Text>No</Text>}
                    </Text>
                    {/* {assetsMap} */}
                </View>
                // <Asset gainLoss={gainLoss} key={index} getAssets={props.getAssets} setAssets={props.setAssets} assets={props.assets} index={index} item={item}/>
            )}
            renderHiddenItem={ (rowData, rowMap) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{color: 'yellow'}}>Left</Text>
                    <Text style={{color: 'yellow'}}>Right</Text>
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