import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class RoundIndicator extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.circleShapeView}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
     
      circleShapeView: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: '#00BCD4'
    },
     
    ovalShapeView: {
      marginTop: 20,
      width: 100,
      height: 100,
      backgroundColor: '#00BCD4',
      borderRadius: 50,
      transform: [
        {scaleX: 2}
      ]
    },
});