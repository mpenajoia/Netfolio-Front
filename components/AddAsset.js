import React , { useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const AddAsset = (props) => {

    const formValues = {symbol: "", name: "", qty: "", invested: "", category: "", current: ""}
    const [addedAsset, setAddedAsset] = useState()
    
    const postAsset = async (asset) => {
        await fetch('http://localhost:4000/assets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(asset)
        })
        .then(res => res.json())
        // do i need this?
        .then(data => setAddedAsset())
        // .then(data => console.log(addedAsset))
        .then(data => {props.getAssets()})
    }
    
    const formSubmit = (values, actions) => {
        actions.resetForm()
        postAsset(values)
        props.getAssets()
        if(props.tabSwitch){
            props.setTabSwitch(false)
        }else{
            props.setTabSwitch(true)
        }
    }

    return(
        <View style={{marginTop: 50, backgroundColor: '#000'}}>
            <Formik 
                initialValues={formValues}
                onSubmit={formSubmit}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={[globalStyles.inputFieldPost, {marginHorizontal: 50 }]}
                            placeholder='Ticker or Symbol'
                            onChangeText={props.handleChange('symbol')}
                            value={props.values.symbol}
                        />
                        <TextInput
                            style={globalStyles.inputFieldPost}
                            placeholder='Asset Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />
                        <TextInput
                            style={globalStyles.inputFieldPost}
                            placeholder='Shares or Tokens'
                            onChangeText={props.handleChange('qty')}
                            value={props.values.qty}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputFieldPost}
                            placeholder='Invested Amount'
                            onChangeText={props.handleChange('invested')}
                            value={props.values.invested}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputFieldPost}
                            placeholder='Category'
                            onChangeText={props.handleChange('category')}
                            value={props.values.category}
                            />
                        <TextInput
                            style={globalStyles.inputFieldPost}
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
export default AddAsset;