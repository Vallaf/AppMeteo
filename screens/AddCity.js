import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, TextInput, Image, TouchableOpacity, Button, StyleSheet, AsyncStorage } from 'react-native';
import { requestGet } from '../utils/requestApi.js';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    inputContainer: {
        width: width,
        paddingTop: 50
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
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

    input: {
        width: '80%',
        borderRadius: 20,
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        fontWeight: 'bold',
        color: 'black'
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});

const nameCity = props => {
    async function _getLocationAsync() {
        dispatch({ type: 'app/getMeteoInformations', payload: name });
    };

    useEffect(() => {
        setName(name)
       
    });
        
    const { dispatch, app: { name} } = props;

    async function handleSubmit() {
        _getLocationAsync()
        console.log(name);
    }
    const [name, setName] = useState('');
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button onPress={handleSubmit}
                title="OK"
                color="black"
            />
            <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: 'https://media.giphy.com/media/26FL3tIixOyV5xYuA/giphy.gif' }} />
            <Text style={styleSheet.textStyle}>{`${name}`}</Text>
        </View>
    );
}

AddCity.propTypes = {
    dispatch: PropTypes.func.isRequired,
    
};

export default connect(({ app }) => ({ app }))(AddCity);