import React, {Component} from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewContainer from '../../app/components/ViewContainer';
import StatusBarBackground from '../../app/components/StatusBarBackground';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null,
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <StatusBarBackground backgroundColor="red"/>
                <View style={styles.topHalf}>
                    <Image source={require('../Images/PokemonTitle.png')} style={styles.pokemonTitle}/>
                </View>
                <View style={styles.bottomHalf}>
                    <View style={styles.buttonView}>
                        <Button onPress={() => navigate('SelectPokedexScreen')} title="Get Started!" color="blue" accessibilityLabel="Tap on Me"/>
                    </View>
                </View>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: 20,
        backgroundColor: "red"
    },
    topHalf: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomHalf: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonView: {
        backgroundColor: "white",
        width: 150,
        borderColor: "black",
        borderWidth: 2
    },
    pokemonTitle: {
        width: 300,
        height: 110
    },
    letsGoButton: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: "white"
    },

})

module.exports = HomeScreen;