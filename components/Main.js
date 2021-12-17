import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Main = (props) => {

  return(
    <View style={styles.main}>
      <Text>This is the Main Component</Text>
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