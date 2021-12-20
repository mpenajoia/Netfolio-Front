import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Button } from 'react-native-elements';

const Asset = (props) => {
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

    

    return(
        <View key={props.index}>
            <Card>
                <Text>
                    {name} 
                    
                    <Button title="Edit" buttonStyle={{fontSize: 20, backgroundColor: '#000', marginHorizontal: 5}} />
                    <Button title="Delete" buttonStyle={{fontSize: 20}} />
                </Text>
            </Card>
        </View>
    )
}
export default Asset;