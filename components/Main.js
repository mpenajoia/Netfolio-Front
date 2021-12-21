import React, {useState , useEffect } from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
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
        <View style={[styles.main]}>
            <Assets assets={props.assets} setAssets={props.setAssets} getAssets={props.getAssets}/>
        </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
  main: {
    // flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    // width: 600,
  },
  h1: {
      fontSize: 30,
  },
  linearGradient: {
    // flex: 1,
  }
});

export default Main;