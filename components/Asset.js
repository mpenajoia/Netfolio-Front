import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, Dimensions} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Button } from 'react-native-elements';
import EditAsset from './EditAsset';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { Icon } from 'react-native-vector-icons/Icon';
import LinearGradient from 'react-native-linear-gradient';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view';


const SCREEN_WIDTH = Dimensions.get('window').width

// const COLORS = {
//     red: '#cc0000',
//     green: '#4cA64c',
//     blue: '#4c4cff',
//     white: '#fff',
//     grey: '#ddd',
//   };

// const buttonIconSize = 24

// const VisibleItem = props => {
//     const { data } = props;
//     return(
//     <View style={[
//         styles.rowFront,
//         { height: 60, }
//     ]}>
//         <Text>{data.item.text}</Text>
//     </View>
//     )
// }
// const HiddenItemWithActions = props => {
//     const { rightActionActivated, swipeAnimatedValue, data } = props;
//     return (
//     <View style={styles.rowBack}>
//         <TouchableWithoutFeedback onPress={() => console.log('Touched')}>
//             <View style={[
//                 styles.backBtn,
//                 styles.backRightBtn,
//                 styles.backRightBtnLeft,
//                 {
//                     width: 60,
//                 }
//             ]}>
//                 <View style={styles.backBtnInner}>
//                     {/* <FeatherIcon color="#ffc219" name="edit-2" size={buttonIconSize} /> */}
//                     <Text style={styles.backBtnText}>Right</Text>
//                 </View>

//             </View>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback onPress={() => console.log('Touched')}>
//             <View style={[
//                 styles.backBtn,
//                 styles.backRightBtn,
//                 styles.backRightBtnRight,
//                 {
//                     width: 60,
//                 }
//             ]}>
//                 <View style={styles.backBtnInner}>
//                     {/* <FeatherIcon color="#ffc219" name="trash-2" size={buttonIconSize} /> */}
//                     <Text style={styles.backBtnText}>Left</Text>
//                 </View>

//             </View>
//         </TouchableWithoutFeedback>
//     </View>
//     )
// } 



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
    












    // const [list, setList] = useState(
    //     [...new Array(20)].map((_, index) => ({
    //         key: `${index}`,
    //         text: `This is item number ${index}`
    //     }))
    // )

    // const renderItem = (data, rowMap) => <VisibleItem data={data} rowMap={rowMap}/>
    
    // const renderHiddenItem = (data, rowMap) => <HiddenItemWithActions data={data} rowMap={rowMap}/>


    
    return(
        // <SwipeListView
        //     data={list}
        //     renderItem={renderItem}
        //     renderHiddenItem={renderHiddenItem}
        //     leftOpenValue={95}
        //     rightOpenValue={-95}
        // />

        <View style={styles.assetContainer} key={props.index}>
                {/* <GestureHandlerRootView> */}
                <View style={styles.assetSection}>    
                    {/* <Text> */}
                {/* <Swipeable > */}
                        <View style={styles.topLine}>
                            <Text style={styles.topText}>{sym}</Text>
                            <Text style={styles.topText}>{name}</Text>
                            <Text style={styles.topText}>{worth.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            })}
                            </Text>
                        </View>
                {/* </Swipeable> */}
                        <View style={styles.midLine}>
                            <Text style={styles.midText}>{cat}</Text>
                            <Text style={styles.midText}>{qty}</Text>
                            <Text style={[styles.midText, (gL > 0) ? styles.gain : styles.loss]}>{gL.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })}
                            </Text>
                        {/* {name}, {sym}, Inv:{invested}, Live:{live}, {cat}, QTY: {qty}, g/l : {gL} */}
                        </View>
                        {/* <View style={styles.bottomLine}>
                        <FeatherIcon color="#ffc219" onPress={handleEditPop} name="edit-2" size={buttonIconSize} />
                        <FeatherIcon color="#ffc219" onPress={onDelete} name="trash-2" size={buttonIconSize} />
                        </View> */}
                    {/* </Text> */}
                </View>
                {/* </GestureHandlerRootView> */}
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
        // marginVertical: 10,
        // borderBottomColor: '31F1E2D',
        // borderBottomWidth: 1,
        width: SCREEN_WIDTH,
        marginBottom: 1.5,
    },  
    assetSection: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        // borderRadius: 20,
        backgroundColor: '#2e2c45',
        // width: 350,
    },  
    topLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    midLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 15,
    },
    bottomLine: {
        flexDirection: 'row',
        justifyContent: 'center',
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


    // rowFront: {
    //     height: 60,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: COLORS.white,
    //     borderBottomColor: COLORS.grey,
    //     borderBottomWidth: 1,
    //   },
    //   rowBack: {
    //     alignItems: 'center',
    //     backgroundColor: COLORS.white,
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //   },
    //   backBtn: {
    //     position: 'absolute',
    //     bottom: 0,
    //     top: 0,
    //     justifyContent: 'center',
    //   },
    //   backLeftBtn: {
    //     alignItems: 'flex-end',
    //     backgroundColor: COLORS.green,
    //     paddingRight: 16,
    //   },
    //   backRightBtn: {
    //     right: 0,
    //     alignItems: 'flex-start',
    //     paddingLeft: 12,
    //   },
    //   backRightBtnLeft: {
    //     backgroundColor: COLORS.blue,
    //   },
    //   backRightBtnRight: {
    //     backgroundColor: COLORS.red,
    //   },
    //   backBtnInner: {
    //     alignItems: 'center',
    //   },
    //   backBtnText: {
    //     color: 'black',
    //     marginTop: 2,
    //   },



  });

export default Asset;