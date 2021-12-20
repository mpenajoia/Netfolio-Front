import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Button } from 'react-native-elements';
import EditAsset from './EditAsset';

const Asset = (props) => {
    const onDelete = async () => {
        await fetch(`http://localhost:4000/assets/${id}`, {
            method: 'DELETE',
            })
            .then(data => {props.getAssets()})
    }

    // const onEdit = async () => {
    //     await fetch(`http://localhost:4000/assets/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(info)
    //     })
    //     .then(data => {props.getAssets()})
    // }
    
    // make component that will list the asset's info plus the edit and delete button
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


    return(
        <View key={props.index}>
            <Card>
                <Text>
                    {name}, {sym}, Inv:{invested}, Live:{live}, {cat}, QTY: {qty}, g/l : {gL}
                    
                    <Button title="Edit" onPress={handleEditPop} buttonStyle={{fontSize: 20, backgroundColor: '#000', marginHorizontal: 5}} />
                    <Button title="Delete" onPress={onDelete} buttonStyle={{fontSize: 20}} />
                </Text>
            </Card>
            <Modal visible={editPop} animationType='slide'>
                <Button title="x" onPress={handleEditPop}/>
                <Text>{name}</Text>
                <EditAsset setEditPop={setEditPop} getAssets={props.getAssets} name={name} ind={ind} cat={cat} qty={qty} sym={sym} invested={invested} live={live} id={id}/>
                <Button title="x" onPress={handleEditPop}/>
            </Modal>
        </View>
    )
}
export default Asset;