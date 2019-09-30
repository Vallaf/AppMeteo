import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Dimensions, ImageBackground} from 'react-native';

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
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
};

const SettingsScreen= props => (
    <ImageBackground source={require('../images/tornade.jpg')} style={{ width: '100%', height: '100%' }}>
        <Text>style={styleSheet.textStyleInside}</Text>
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle} >Settings</Text>
        </View>
    </ImageBackground>
);

SettingsScreen.propTypes = {};

export default SettingsScreen;