import React , { useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const EditAsset = (props) => {
    //set defaults/placeholders here
    const editValues = {symbol: props.sym, name: props.name, qty: props.qty, invested: props.invested, category: props.cat, current: props.live}
   

    const [editedAsset, setEditedAsset] = useState()
    
    const onEdit = async (asset) => {
        await fetch(`http://localhost:4000/assets/${props.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(asset)
        })
        .then(data => {props.getAssets()})
    }
    
    const formEditSubmit = (values, actions) => {
        actions.resetForm()
        onEdit(values)
        props.getAssets()
        props.setEditPop(false)
    }

    const handleX = () => {
        // Fix this
        props.setEditPop(false)
    } 

    return(
        <View style={{marginTop: 30}}>
            <Button title="x" onPress={handleX} />
            <Text>{props.name}</Text>
            <Formik 
                initialValues={editValues}
                onSubmit={formEditSubmit}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Ticker or Symbol'
                            onChangeText={props.handleChange('symbol')}
                            value={props.values.symbol}
                        />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Asset Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Shares or Tokens'
                            onChangeText={props.handleChange('qty')}
                            value={props.values.qty.toString()}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Invested Amount'
                            onChangeText={props.handleChange('invested')}
                            value={props.values.invested.toString()}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Category'
                            onChangeText={props.handleChange('category')}
                            value={props.values.category}
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Current Share or Token Price'
                            onChangeText={props.handleChange('current')}
                            value={props.values.current.toString()}
                            keyboardType='numeric'
                        />
                        <Button title='submit' colors='blue' onPress={props.handleSubmit}/>   
                    </View>
                )}

            </Formik>
        </View>
    )
}
export default EditAsset;