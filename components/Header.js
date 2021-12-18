import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import AddAsset from './AddAsset';

const Header = (props) => {
  const [assetPop, setAssetPop] = useState(false)

  const handlePop = () => {
    if(assetPop){
      setAssetPop(false)
    }else{
      setAssetPop(true)
    }
  }

  return(
    <View style={styles.header}>
      <Text style={styles.text}>Netfolio</Text>
      <Button onPress={handlePop} title="Add Asset" />
      <Modal visible={assetPop} animationType='slide' transparent='true'>
        <AddAsset getAssets={props.getAssets} setAssetPop={setAssetPop}/>

      </Modal>
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