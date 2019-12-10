import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import fundoTela from '../assets/backgroundInicio.png';

export default function Scores(props) {

    return (

        <ImageBackground source={fundoTela} style={{ width: '100%', height: '100%' }}>
            <ScrollView >
                <View style={styles.container}>
                    <Text style={styles.textScores}>Scores:</Text>
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
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    viewScores: {
        display: 'flex',
        flexDirection: 'row',
        width: 700,
        justifyContent: 'space-between',
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },

    textScores: {
        fontSize: 50
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