/**
 * Created by justinfrazer on 7/16/17.
 */
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

class ViewContainer extends Component {
    render() {
        return (
        <View style={styles.viewContainer}>
            {this.props.children}
        </View>
        )
    }
}

const styles = StyleSheet.create({

    viewContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "blue"
    }

});

module.exports = ViewContainer;