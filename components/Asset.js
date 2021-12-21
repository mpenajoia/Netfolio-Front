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
    let worth
    if(asset){
        ind = props.index
        cat = props.item.category
        qty = props.item.qty
        sym = props.item.symbol
        name = props.item.name
        invested = props.item.invested
        live = props.item.current
        id = props.item._id
        worth = props.item.current * props.item.qty
    }else{
        ind = 'loading'
        cat = 'loading'
        qty = 'loading'
        sym = 'loading'
        name = 'loading'
        invested = 'loading'
        live = 'loading'
        id = 'loading'
        worth = 'loading'
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
        <View style={styles.assetContainer} key={props.index}>
                    <View style={styles.assetSection}>    
                        {/* <Text> */}
                            <View style={styles.topLine}>
                                <Text>{sym}</Text>
                                <Text>{qty}</Text>
                                <Text>{worth}</Text>
                            </View>
                            <View style={styles.bottomLine}>

                            {/* {name}, {sym}, Inv:{invested}, Live:{live}, {cat}, QTY: {qty}, g/l : {gL} */}
                            <FeatherIcon color="#ffc219" onPress={handleEditPop} name="edit-2" size={buttonIconSize} />
                            <FeatherIcon color="#ffc219" onPress={onDelete} name="trash-2" size={buttonIconSize} />
                            </View>
                        {/* </Text> */}
                    </View>
            <Modal visible={editPop} animationType='slide'>
                <LinearGradient Gradient colors={['#201f2e', '#1F1E2D', '#171621']} style={styles.linearGradient}>  
                    <Text style={{textAlign: 'center', paddingTop: 60,}}>{name}</Text>
                    <EditAsset setEditPop={setEditPop} getAssets={props.getAssets} name={name} ind={ind} cat={cat} qty={qty} sym={sym} invested={invested} live={live} id={id}/>
                </LinearGradient>
            </Modal>
        </View>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
    assetContainer: {
        marginVertical: 10,
    },  
    assetSection: {
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#2e2c45',
        width: 350,
    },  
    topLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    bottomLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });

export default Asset;