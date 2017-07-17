import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View, Image, Button, ListView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewContainer from './app/components/ViewContainer';
import StatusBarBackground from './app/components/StatusBarBackground';
import _ from 'lodash';

//QUESTIONS FOR DEVS:
//ListView not scrolling correctly
//NavigationOptions unused field error

const people = [
    {firstName: "justin", lastName: "frazer"},
    {firstName: "cassie", lastName: "frazer"},
    {firstName: "kim", lastName: "frazer"},
    {firstName: "kevin", lastName: "frazer"},
    {firstName: "mattie", lastName: "coughlin"}

]

class HomeScreen extends Component {

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            peopleDataSource: ds.cloneWithRows(people)
        }
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
                    <Image source={require('./Images/PokemonTitle.png')} style={styles.pokemonTitle}/>
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

class SelectPokedexScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `Select your Pokedex`
    });

    componentDidMount() {
            return fetch('https://pokeapi.co/api/v2/pokedex/')
                .then((response) => response.json())
                .then((responseJson) => {
                    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    this.setState({
                        isLoading: false,
                        dataSource: ds.cloneWithRows(responseJson.results),
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
                <View style={{flex: 1}}>
                    <View style={{ height: 1, backgroundColor: "black"}}/>
                    <View style={{flex: 1}}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderPokedex}
                            style={{flex: 1}}
                        />
                    </View>
                    <View style={{ height: 1, backgroundColor: "black"}}/>
                </View>
        );

    }

    renderPokedex(Pokedex) {
        //const { navigate } = this.props.navigation;
        return (

            <TouchableOpacity onPress={() => console.log("pressed")}>
                <View style={styles.PokedexRow}>
                    <View style={{flex: 1}}>
                        <Text style={styles.PokedexRowName}>{_.capitalize(Pokedex.name)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

class ViewPokemonForPokedexScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `POKEDEX NAME`
    });

    componentDidMount() {
        return fetch('https://pokeapi.co/api/v2/pokedex/')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.results),
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
                <View>
                </View>
        );

    }

}

export default class App extends React.Component {
    render() {
        return (
            <PokeMaster/>
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
    PokedexRow: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "blue"
    },
    PokedexRowName: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }

});

const PokeMaster = StackNavigator({
    Home: { screen: HomeScreen },
    SelectPokedexScreen: { screen: SelectPokedexScreen },
    ViewPokemonForPokedexScreen: { screen: ViewPokemonForPokedexScreen }
});

AppRegistry.registerComponent('PokeMaster', () => PokeMaster);