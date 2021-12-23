import React, { useEffect } from 'react';
import {View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Assets from './Assets';

const Main = (props) => {
    useEffect(() => {
        props.getAssets();
      }, [])

    return(
        <LinearGradient Gradient colors={['#201f2e', '#1F1E2D', '#171621']} style={{paddingBottom: 80}}>
        <View style={[styles.main]}>
            <Assets assets={props.assets} api={props.api} setAssets={props.setAssets} getAssets={props.getAssets}/>
        </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  h1: {
      fontSize: 30,
  },
});

export default Main;