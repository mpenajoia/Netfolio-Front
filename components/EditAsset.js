import React  from 'react';
import {View, TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

const EditAsset = (props) => {
    const editValues = {symbol: props.sym, name: props.name, qty: props.qty, invested: props.invested, category: props.cat, current: props.live}   
    const onEdit = async (asset) => {
        await fetch(`${props.api}${props.id}`, {
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
        props.setEditPop(false)
    } 

    return(
        <View style={{marginTop: 30}}>
            <Formik 
                initialValues={editValues}
                onSubmit={formEditSubmit}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Ticker or Symbol'
                            placeholderTextColor={'#6e6e6e'}
                            onChangeText={props.handleChange('symbol')}
                            value={props.values.symbol}
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Asset Name'
                            placeholderTextColor={'#6e6e6e'}
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Shares or Tokens'
                            placeholderTextColor={'#6e6e6e'}
                            onChangeText={props.handleChange('qty')}
                            value={props.values.qty.toString()}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Invested Amount'
                            placeholderTextColor={'#6e6e6e'}
                            onChangeText={props.handleChange('invested')}
                            value={props.values.invested.toString()}
                            keyboardType='numeric'
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Category'
                            placeholderTextColor={'#6e6e6e'}
                            onChangeText={props.handleChange('category')}
                            value={props.values.category}
                            />
                        <TextInput
                            style={globalStyles.inputFieldPut}
                            placeholder='Current Share or Token Price'
                            placeholderTextColor={'#6e6e6e'}
                            onChangeText={props.handleChange('current')}
                            value={props.values.current.toString()}
                            keyboardType='numeric'
                            />
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Button title="Cancel" color='#ffc219' onPress={handleX}/>
                            <Button title='Submit' color='#ffc219' onPress={props.handleSubmit}/>   
                        </View>
                    </View>
                )}

            </Formik>
        </View>
    )
}

export default EditAsset;