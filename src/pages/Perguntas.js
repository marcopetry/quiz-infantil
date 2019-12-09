import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import fundo from '../assets/backgroundInicio.png';
import { ScrollView } from 'react-native-gesture-handler';

export default function Perguntas(props) {

    return (
        <ImageBackground source={fundo} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.viewText} >
                        <Text style={[styles.text, styles.header]}>Pergunta 1:</Text>
                        <Text style={styles.text}>{props.enunciado}</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 1:</Text>
                        <Text style={styles.text} onPress={() => props.passarPergunta()}>{props.alternativa[0]}</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 2:</Text>
                        <Text style={styles.text}>{props.alternativa[1]}</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 3:</Text>
                        <Text style={styles.text}>{props.alternativa[2]}</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 4:</Text>
                        <Text style={styles.text}>{props.alternativa[3]}</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50
    },

    viewText: {
        width: '80%',
        backgroundColor: '#339BA1',
        marginVertical: 20,
        borderRadius: 10
    },

    header: {
        backgroundColor: '#fff',
        width: 100,
        margin: 5,
        padding: 3,
        borderRadius: 5,
        paddingLeft: 5
    },

    text: {
        padding: 10,
        //fontFamily: 'Roboto-Light'
    }
});