import React, {useState , useEffect } from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import Assets from './Assets';

const Main = (props) => {
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