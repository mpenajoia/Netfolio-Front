import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import EditAsset from './EditAsset';
import FeatherIcon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';


const Asset = (props) => {
    const onDelete = async () => {
        await fetch(`${props.api}${id}`, {
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

    const gL = (qty * live) - ((invested/qty) * qty)
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
                        <View style={styles.topLine}>
                            <Text style={styles.topText}>{sym}</Text>
                            <Text style={styles.topText}>{name}</Text>
                            <Text style={styles.topText}>{worth.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })}
                            </Text>
                        </View>
                        <View style={styles.midLine}>
                            <Text style={styles.midText}>{cat}</Text>
                            <Text style={styles.midText}>{qty}</Text>
                            <Text style={[styles.midText, (gL > 0) ? styles.gain : styles.loss]}>{gL.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })}
                            </Text>
                        </View>
                        <View style={styles.bottomLine}>
                        <FeatherIcon color="#ffc219" onPress={handleEditPop} name="edit-2" size={buttonIconSize} />
                        <FeatherIcon color="#ffc219" onPress={onDelete} name="trash-2" size={buttonIconSize} />
                        </View>
                </View>
                <Modal visible={editPop} animationType='slide'>
                    <LinearGradient Gradient colors={['#201f2e', '#1F1E2D', '#171621']} style={styles.linearGradient}>  
                        <Text style={{textAlign: 'center', paddingTop: 60,}}>{name}</Text>
                        <EditAsset  api={props.api} setEditPop={setEditPop} getAssets={props.getAssets} name={name} ind={ind} cat={cat} qty={qty} sym={sym} invested={invested} live={live} id={id}/>
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
        marginBottom: 1.5,
    },  
    assetSection: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#2e2c45',
    },  
    topLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    midLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    bottomLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topText: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
        alignItems: 'center',
    },
    midText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
        alignItems: 'center',
    },
    gain: {
        color: '#29E7B9',
    },
    loss: {
        color: '#FF4963',
    },

  });

export default Asset;