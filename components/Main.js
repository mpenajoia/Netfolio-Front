import React, {useState , useEffect } from 'react';
import {View, Text, StyleSheet, Modal, Button, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
        <LinearGradient Gradient colors={['#201f2e', '#1F1E2D', '#171621']} style={styles.linearGradient}>
        {/* <SafeAreaView> */}
        <View style={[styles.main]}>
            <Assets assets={props.assets} setAssets={props.setAssets} getAssets={props.getAssets}/>
        </View>
        {/* </SafeAreaView> */}
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
  main: {
    // paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  h1: {
      fontSize: 30,
  },
  linearGradient: {
    // flex: 1,
  }
});

export default Main;