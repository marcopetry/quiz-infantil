import React, { useState } from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import fundo from '../assets/backgroundInicio.png';
import { ScrollView } from 'react-native-gesture-handler';
import * as Font from 'expo-font';

export default function Pergutas() {


    return (
        <ImageBackground source={fundo} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Pergunta 1:</Text>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 1:</Text>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 2:</Text>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 3:</Text>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={[styles.text, styles.header]}>Alternativa 4:</Text>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
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