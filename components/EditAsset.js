import React , { useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const EditAsset = (props) => {
    //set defaults/placeholders here
    const editValues = {symbol: "", name: "", qty: "", invested: "", category: "", current: ""}
    const [editedAsset, setEditedAsset] = useState()
    
    const onEdit = async () => {
        await fetch(`http://localhost:4000/assets/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
        // pass down this prop
        .then(data => {props.getAssets()})
    }
    
    const formEditSubmit = (values, actions) => {
        actions.resetForm()
        postAsset(values)
        props.getAssets()
    }

    const handleX = () => {
        props.setAssetPop(false)
    } 

    return(
        <View style={{marginTop: 30}}>
            <Button title="x" onPress={handleX} />
            <Formik 
                initialValues={editValues}
                onSubmit={formEditSubmit}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.inputField}
                            placeholder='Ticker or Symbol'
                            onChangeText={props.handleChange('symbol')}
                            value={props.values.symbol}
                        />
                        <TextInput
                            style={globalStyles.inputField}
                            placeholder='Asset Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <TextInput
                            style={globalStyles.inputField}
                            placeholder='Shares or Tokens'
                            onChangeText={props.handleChange('qty')}
                            value={props.values.qty}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputField}
                            placeholder='Invested Amount'
                            onChangeText={props.handleChange('invested')}
                            value={props.values.invested}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputField}
                            placeholder='Category'
                            onChangeText={props.handleChange('category')}
                            value={props.values.category}
                            />
                        <TextInput
                            style={globalStyles.inputField}
                            placeholder='Current Share or Token Price'
                            onChangeText={props.handleChange('current')}
                            value={props.values.current}
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