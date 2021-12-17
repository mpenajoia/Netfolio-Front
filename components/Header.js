import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddAsset from './AddAsset';

const Header = (props) => {

  return(
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
      <AddAsset />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 500,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  }
});


export default Header;