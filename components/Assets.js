import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Asset from './Asset';

const SCREEN_WIDTH = Dimensions.get('window').width

const Assets = (props) => {
    let netWorthArr = []
    let netWorth = 0
    let netInvestedArr = []
    let investedSum = 0
    let assetsMap
    if (props.assets){
        assetsMap = props.assets.map((item, index) => {
            netWorthArr.push(item.qty * item.current)
            netInvestedArr.push(item.invested)
            return(
                <Asset  api={props.api} gainLoss={gainLoss} key={index} getAssets={props.getAssets} setAssets={props.setAssets} assets={props.assets} index={index} item={item}/>
                )
            })
    }else{
        assetsMap = <Text>Map empty</Text>
    }
    for(let i = 0; i < netWorthArr.length; i++){
        netWorth += netWorthArr[i],
        investedSum += netInvestedArr[i];
    }
    const gainLoss = (netWorth - investedSum)

    return(
        <View style={{paddingTop: 10}}>
            <View>
                <View style={styles.assetsBold} >    
                    <Text style={styles.assetsBold}>Net Worth: 
                        <Text style={styles.assetsNumbers}> {netWorth.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })}
                        </Text>
                    </Text>
                </View>
                <View style={styles.assetsSec} >
                    <Text style={styles.assetsSec} >Gain/Loss: 
                        <Text style={[(gainLoss > 0) ? styles.gain : styles.loss]} > {gainLoss.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })}
                        </Text>
                    </Text>
                {/* </View>
                <View> */}
                    <Text style={styles.assetsSec} >Invested Total: 
                        <Text style={styles.assetsNumbers}> {investedSum.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })}
                        </Text>
                    </Text>
                </View>
                <View style={styles.assetsWrapper}>
                    <ScrollView style={{width: SCREEN_WIDTH, marginBottom: 128}}>
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
    assetsSec: {
      paddingVertical: 0,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
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
        marginVertical: 30,
        height: 685,
    },
  });

export default Assets;