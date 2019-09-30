import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
};

const HomeScreen = props => (
    <ImageBackground source={require('../images/earth.jpg')} style={{ width: '100%', height: '100%' }}>
        <Text>style={styleSheet.textStyleInside}</Text>
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle} >WEATHER FORECAST HOME !</Text>
        </View>
    </ImageBackground>
);

HomeScreen.propTypes = {};

export default HomeScreen;