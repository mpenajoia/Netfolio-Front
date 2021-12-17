import React, {useState , useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Content from './Content';

const Main = (props) => {
console.log(props.assets)

// Create Asset

let assetsMap
if (props.assets){
    assetsMap = props.assets.map((item, index) => <Text key={index}>{item.name}</Text>)
}else{
    assetsMap = <Text>Map empty</Text>
}

  return(
    <View style={styles.main}>
      <Text>This is the Main Component</Text>
      {assetsMap}
      <Content/>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    height: 100,
    padding: 10,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Main;