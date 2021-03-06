import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AddCity from '../screens/AddCity';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import IntroScreen from '../screens/IntroScreen';
import IntroFormScreen from '../screens/IntroFormScreen';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({
  SignIn: IntroFormScreen,
  Welcome: IntroScreen
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  AddCity: AddCity,
  
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App: TabNavigator

    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));