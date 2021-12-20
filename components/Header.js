import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import AddAsset from './AddAsset';

const Header = (props) => {



  return(
    <View style={styles.header}>
      <Text style={styles.text}>Netfolio</Text>
      {/* Put a button for Assets and Charts/Portfolio */}
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 75,
    padding: 15,
  },
  text: {
    color: '#000',
    fontSize: 23,
    textAlign: 'center'
  }
});


export default Header;