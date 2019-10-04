import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Dimensions, error, Image } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        width: '80%',
        height: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'hotpink'

    },
    errorStyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold'
    }
};

const HomeScreen = props => {

    async function _getLocationAsync() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            MediaStreamError('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        dispatch({ type: 'app/getMeteoInformations', payload: location });
    };

    useEffect(() => {
        _getLocationAsync();
        /* dispatch({type: 'app/getMeteoInformations'});
         console.log(informations);*/
    }, []);

    useEffect(() => {
        if (informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
        }
        //console.log(nameCity);
    });

    const { dispatch, app: { informations } } = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');

    return (

        <View style={styleSheet.container}>
            <Image
                style={{ width: 500, height: 600 }}
                source={{ uri: 'https://media.giphy.com/media/l3mZkjBbKuS0nTLJC/giphy.gif' }} />
            <Text style={styleSheet.textStyle}>{`${nameCity}`}</Text>
            <Text style={styleSheet.textStyle}>{`${temp}°C`}</Text>
            {error !== '' && <Text style={styleSheet.errorStyle}>{error}</Text>}

        </View>

    );
}

HomeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    }).isRequired,
};


export default connect(({ app }) => ({ app }))(HomeScreen);