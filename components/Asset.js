import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Button } from 'react-native-elements';

const Asset = (props) => {
    // make component that will list the asset's info plus the edit and delete button



    return(
        <View>
            <Card>
                <Text>
                    
                    Indv Asset
                    <Button title="Clear button" type="clear" />
                </Text>
            </Card>
        </View>
    )
}
export default Asset;