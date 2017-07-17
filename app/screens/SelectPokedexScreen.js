import React, {Component} from 'react';
import { Text, TouchableOpacity, ListView, ActivityIndicator, StyleSheet, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewContainer from '../../app/components/ViewContainer';
import _ from 'lodash';

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
            <ViewContainer>
                <View style={{ height: 1, backgroundColor: "black"}}/>
                <View style={{flex: 1}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderPokedex}
                    />
                </View>
                <View style={{ height: 1, backgroundColor: "black"}}/>
            </ViewContainer>
        );

    }

    renderPokedex(Pokedex) {
        //const { navigate } = this.props.navigation;
        return (

            <TouchableOpacity onPress={() => console.log("pressed")}>
                <View style={styles.PokedexRow}>
                        <Text style={styles.PokedexRowName}>{_.capitalize(Pokedex.name)}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
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

module.exports = SelectPokedexScreen;