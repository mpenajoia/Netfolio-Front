import React, {useState , useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Assets from './Assets';

const Main = (props) => {

    const postAssets = async (asset) => {
        await fetch('http://localhost:4000/assets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(asset)
        })
        .then(res => res.json())
        // change props.setAssets to a newly created state that handles only addedAssets
        .then(data => props.setAssets({symbol: "", name: "", qty: "", invested: "", category: "", current: ""}))
        .then(data => console.log('Post req:', data))
    }

    return(
        <View style={styles.main}>
        <Text style={styles.h1}>This is the Main Component</Text>
        <Assets assets={props.assets}/>
        </View>
    )
}
const styles = StyleSheet.create({
  main: {
    height: 300,
    paddingVertical: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
      fontSize: 30,
  }
});

export default Main;