import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    errorStyle: {
        color: 'red',
        fontsize: 25,
        fontWeight: 'bold'
    }
};

const HomeScreen = props => {
        useEffect(() => {
        dispatch({type: 'app/getMeteoInformations'});
        console.log(informations);
    }, []);

    useEffect(() => {        
        if (informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
        }
        console.log(nameCity);
    });

    const { dispatch, app: { informations} } = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');

    return (
        <ImageBackground source={require('../images/earth.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle}>{`Ville: ${nameCity}`}</Text>
            <Text style={styleSheet.textStyle}>{`Temperature: ${temp}°C`}</Text>
        </View>
        </ImageBackground>
    );
}

HomeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    }).isRequired,
};

/*const HomeScreen = props => (
        <ImageBackground source={require('../images/earth.jpg')} style={{ width: '100%', height: '100%' }}>
            <Text>style={styleSheet.textStyleInside}</Text>
            <View style={styleSheet.container}>
                <Text style={styleSheet.textStyle} >WEATHER FORECAST HOME !</Text>
            </View>
        </ImageBackground>
    );*/

   


    export default connect(({ app }) => ({ app }))(HomeScreen);