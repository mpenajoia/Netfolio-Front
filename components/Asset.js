import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Button } from 'react-native-elements';
import EditAsset from './EditAsset';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Icon } from 'react-native-vector-icons/Icon';
import LinearGradient from 'react-native-linear-gradient';

const Asset = (props) => {
    const onDelete = async () => {
        await fetch(`http://localhost:4000/assets/${id}`, {
            method: 'DELETE',
            })
            .then(data => {props.getAssets()})
    }

    let asset = props.assets
    let ind
    let cat
    let qty 
    let sym 
    let name 
    let invested 
    let live 
    let id 
    if(asset){
        ind = props.index
        cat = props.item.category
        qty = props.item.qty
        sym = props.item.symbol
        name = props.item.name
        invested = props.item.invested
        live = props.item.current
        id = props.item._id
    }else{
        ind = 'loading'
        cat = 'loading'
        qty = 'loading'
        sym = 'loading'
        name = 'loading'
        invested = 'loading'
        live = 'loading'
        id = 'loading'
    }

    const gL = (qty * live) - (qty * invested)

    const [editPop, setEditPop] = useState(false)
    const handleEditPop = () => {
        if(editPop){
            setEditPop(false)
        }else{
            setEditPop(true)
        }
    }
    const buttonIconSize = 24
    return(
        <View key={props.index}>
            {/* <Card> */}
                <Text>
                    {name}, {sym}, Inv:{invested}, Live:{live}, {cat}, QTY: {qty}, g/l : {gL}
                    {/* <Button title="Edit" onPress={handleEditPop} buttonStyle={{fontSize: 20, backgroundColor: '#000', marginHorizontal: 5}} />
                    <Button title="Delete" onPress={onDelete} buttonStyle={{fontSize: 20}} /> */}
                    <FeatherIcon color="#ffc219" onPress={handleEditPop} name="edit-2" size={buttonIconSize} />
                    <FeatherIcon color="#ffc219" onPress={onDelete} name="trash-2" size={buttonIconSize} />
                </Text>
            {/* </Card> */}
            <Modal visible={editPop} animationType='slide'>
                {/* <Button title="x" onPress={handleEditPop}/> */}
                <LinearGradient Gradient colors={['#201f2e', '#1F1E2D', '#171621']} style={styles.linearGradient}>  
                <Text style={{textAlign: 'center', paddingTop: 60,}}>{name}</Text>
                <EditAsset setEditPop={setEditPop} getAssets={props.getAssets} name={name} ind={ind} cat={cat} qty={qty} sym={sym} invested={invested} live={live} id={id}/>
                {/* <Button title="x" onPress={handleEditPop}/> */}
                </LinearGradient>
            </Modal>
        </View>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
  });

export default Asset;