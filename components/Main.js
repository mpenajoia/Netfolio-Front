import React, {useState , useEffect } from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
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
    }
    const [assetPop, setAssetPop] = useState(false)

    const handlePop = () => {
        if(assetPop){
          setAssetPop(false)
        }else{
          setAssetPop(true)
        }
    }
    
    useEffect(() => {
        props.getAssets();
      }, [])

    return(
        <View style={styles.main}>
            <Assets assets={props.assets} setAssets={props.setAssets} getAssets={props.getAssets}/>
        </View>
    )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
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