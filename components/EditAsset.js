import React , { useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';


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
        // <LinearGradient Gradient colors={['#201f2e', '#1F1E2D', '#171621']} style={styles.linearGradient}>        
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
        // </LinearGradient>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
  });

export default EditAsset;