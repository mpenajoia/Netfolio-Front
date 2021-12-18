import React , { useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const AddAsset = (props) => {

    const formValues = {symbol: "", name: "", qty: "", invested: "", category: "", current: ""}
    const [addedAsset, setAddedAsset] = useState()
    const formSubmit = (values, actions) => {
        actions.resetForm()
        console.log(values)
        
        // these values need to be saved in a STATE
        // this onSubmit needs to trigger a POST
        // the STATE with these values needs to go with the POST request
    }

    const handleX = () => {
        props.setAssetPop(false)
    } 

    return(
        <View style={{marginTop: 30}}>
            <Button title="x" onPress={handleX} />
            <Formik 
                initialValues={formValues}
                onSubmit={formSubmit}
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
export default AddAsset;