import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from './components/Header';
import apiUrl from './backendAPI/apiConfig';

const App = () => {
  return(
    <View style={styles.container}>
      <Header title='Shopping List'/>
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img} /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // text: {
  //   color: '#c2c2c2',
  //   fontSize: 30
  // },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2,
  }
});


export default App;
