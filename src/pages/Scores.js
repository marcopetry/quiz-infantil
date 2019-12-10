import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Scores() {

    return (
        <View style={styles.container}>
            <Text>Scores:</Text>
            <View style={styles.viewScores}>
                <Text>Português: </Text>
                <Text>10</Text>
            </View>
            <View style={styles.viewScores}>
                <Text>Matemática: </Text>
                <Text>10</Text>
            </View>
            <View style={styles.viewScores}>
                <Text>Química: </Text>
                <Text>10</Text>
            </View>
            <View style={styles.viewScores}>
                <Text>História: </Text>
                <Text>10</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Início</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#93E9ED',
        height: '100%'
    },

    viewScores: {
        display: 'flex',
        flexDirection: 'row',
        width: 700,
        justifyContent: 'space-between',
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },

    button: {
        backgroundColor: '#E65B6B', 
        width: 700, 
        height: 40, 
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    }
});