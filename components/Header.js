import React  from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Header = (props) => {

  return(
    <View style={styles.header}>
      <Text style={styles.text}>Netfolio</Text>
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