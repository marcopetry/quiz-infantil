import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import fundoTela from '../assets/backgroundInicio.png';

export default function Scores(props) {
    /* props.navigation.setParams({
        title: 'Scores'
    }); */

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
                        <Text>Inglês: </Text>
                        <Text>{global.ingles}</Text>
                    </View>
                    <View style={styles.viewScores}>
                        <Text>Personagens: </Text>
                        <Text>{global.personagens}</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Temas')}>
                            <Text>Início</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '100%'
    },

    viewScores: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10, 
        backgroundColor: 'rgba(245, 245, 245, 0.5)',
    },

    textScores: {
        fontSize: 50
    },

    viewButton: {
        width: '80%',
    },

    button: {
        backgroundColor: '#E65B6B',
        display: 'flex',
        flex: 1,
        flexShrink: 1,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    }
});