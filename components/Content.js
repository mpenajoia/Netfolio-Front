import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Content = (props) => {
console.log('Content Comp:', props.assets)

let assetsMap
if (props.assets){
    assetsMap = props.assets.map((item, index) => <Text key={index}>{item.name}</Text>)
}else{
    assetsMap = <Text>Map empty</Text>
}

return(
        <View>
            <Text>Content Page</Text>
            {assetsMap}
        </View>
    )
}
export default Content;