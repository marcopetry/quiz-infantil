import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Scores(props) {

    return (
        <View style={styles.container}>
            <Text>Scores:</Text>
            <View style={styles.viewScores}>
                <Text>Português: </Text>
                <Text>{global.portugues}</Text>
            </View>
            <View style={styles.viewScores}>
                <Text>Matemática: </Text>
                <Text>{global.matematica}</Text>
            </View>
            <View style={styles.viewScores}>
                <Text>Química: </Text>
                <Text>{global.quimica}</Text>
            </View>
            <View style={styles.viewScores}>
                <Text>História: </Text>
                <Text>{global.historia}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Temas')}>
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