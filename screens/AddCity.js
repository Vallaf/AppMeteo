import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions, TextInput,Image, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';
//import {requestGet } from '../utils/requestApi.js';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    inputContainer: {
        width: width,
        paddingTop: 50
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: 'bold',
    },
    saveButton: {
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'hotpink',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});

const nameCity = props => (

    <View style={styles.inputContainer}>

        <TextInput
            style={styles.textInput}
            placeholder="ADD CITY"
            maxLength={50}
            onBlur={Keyboard.dismiss}
        />
        <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Search</Text>
        </TouchableOpacity>
        <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: 'https://media.giphy.com/media/26FL3tIixOyV5xYuA/giphy.gif' }} />

    </View>

);

nameCity.propTypes = {};

export default nameCity;