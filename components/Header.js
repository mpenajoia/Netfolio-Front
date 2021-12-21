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
    paddingBottom: 15,
    paddingTop: 50,
    backgroundColor: '#1F1E2D',
  },
  text: {
    color: '#ffc219',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});


export default Header;