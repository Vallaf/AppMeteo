import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, Dimensions, AsyncStorage, Image } from 'react-native';

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    label: {
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        width: '80%',
        borderRadius: 40,
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        fontWeight: 'bold',
        color: 'black'
    },
};

const IntroFormScreen = props => {
    async function handleSubmit() {
        if (name !== '') {
            await AsyncStorage.setItem('name', name);
            navigation.navigate('Welcome');
        }
    }

    const [name, setName] = useState('');
    const { dispatch, navigation } = props;

    return (
        <View style={styleSheet.container}>
            <Image
                style={{ width: '100%', height: '80%' }}
                source={{ uri: 'https://media.giphy.com/media/uMUPuz6h2xlzW/giphy.gif' }} />
            <Text style={styleSheet.label} >NAME</Text>
            <TextInput
                style={styleSheet.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <Button
                onPress={handleSubmit}
                title="OK"
                color="black"
            />
        </View>
    );
}

IntroFormScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,

    }).isRequired,
};

export default connect()(IntroFormScreen);