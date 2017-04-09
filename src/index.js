//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RSCButton, RSCHeader } from '../rsc';

// create a component
class RSC extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RSCHeader type='h1'>Test</RSCHeader>
                <RSCButton type='warning'>
                    Submit
                </RSCButton>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default RSC;
