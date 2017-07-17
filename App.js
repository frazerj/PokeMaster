import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen';
import SelectPokedexScreen from './app/screens/SelectPokedexScreen';

//QUESTIONS FOR DEVS:
//ListView not scrolling correctly
//NavigationOptions unused field error

export default class App extends React.Component {
    render() {
        return (
            <PokeMaster/>
        );
    }
}

const PokeMaster = StackNavigator({
    Home: { screen: HomeScreen },
    SelectPokedexScreen: { screen: SelectPokedexScreen },
});

AppRegistry.registerComponent('PokeMaster', () => PokeMaster);