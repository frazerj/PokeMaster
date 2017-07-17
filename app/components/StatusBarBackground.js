/**
 * Created by justinfrazer on 7/16/17.
 */
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

class StatusBarBackground extends Component {
    render() {
        return (
            <View style={[styles.statusBarBackground, {backgroundColor: this.props.backgroundColor}]}/>
        )
    }
}

const styles = StyleSheet.create({

    statusBarBackground: {
        height: 20,
        backgroundColor: "white"
    }

});

module.exports = StatusBarBackground;