import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import fundoTela from '../assets/backgroundInicio.png';
import { ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

export default function Perguntas(props) {
    const [primeiraResposta, setPrimeiraResposta] = useState('#339BA1'),
        [segundaResposta, setSegundaResposta] = useState('#339BA1'),
        [terceiraResposta, setTerceiraResposta] = useState('#339BA1'),
        [quartaResposta, setQuartaResposta] = useState('#339BA1');

    function escolheuResposta(resposta, id) {
        let cor;
        if(resposta === props.correta){
            props.adicionarPontoRespostaCorreta();
            cor = '#CCFF33';
        } else{
            cor = '#E65B6B';
        }
        if(id === 0){
            setPrimeiraResposta(cor);
            setTimeout(() => {
                setPrimeiraResposta('#339BA1');
                props.passarPergunta();
            }, 700);
            return;
        }

        if(id === 1){
            setSegundaResposta(cor);
            setTimeout(() => {
                setSegundaResposta('#339BA1');
                props.passarPergunta();
            }, 700);
            return;
        }

        if(id === 2){
            setTerceiraResposta(cor);
            setTimeout(() => {
                setTerceiraResposta('#339BA1');
                props.passarPergunta();
            }, 700);
            return;
        }

        if(id === 3){
            setQuartaResposta(cor);
            setTimeout(() => {
                setQuartaResposta('#339BA1');
                props.passarPergunta();
            }, 700);
            return;
        }
    }

    return (
        <ImageBackground source={fundoTela} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.viewText} >
                        <Text style={[styles.text, styles.header]}>Pergunta 1:</Text>
                        <Text style={styles.text}>{props.enunciado}</Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.viewText, { backgroundColor: primeiraResposta }]}
                        onPress={() => escolheuResposta(props.alternativa[0], 0)}
                    >
                        <Text style={[styles.text, styles.header]}>Alternativa 1:</Text>
                        <Text style={styles.text} >{props.alternativa[0]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.viewText, {backgroundColor: segundaResposta}]}
                        onPress={() => escolheuResposta(props.alternativa[1], 1)}
                        >
                        <Text style={[styles.text, styles.header]}>Alternativa 2:</Text>
                        <Text style={styles.text}>{props.alternativa[1]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.viewText, {backgroundColor: terceiraResposta}]}
                        onPress={() => escolheuResposta(props.alternativa[2], 2)}
                        >
                        <Text style={[styles.text, styles.header]}>Alternativa 3:</Text>
                        <Text style={styles.text}>{props.alternativa[2]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.viewText, {backgroundColor: quartaResposta}]}
                        onPress={() => escolheuResposta(props.alternativa[3], 3)}
                        >
                        <Text style={[styles.text, styles.header]}>Alternativa 4:</Text>
                        <Text style={styles.text}>{props.alternativa[3]}</Text>
                    </TouchableOpacity>
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
        marginVertical: 50,
        width: '100%'
    },

    viewText: {
        width: 700,
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
    },

    fundoRespostaErrada: {
        backgroundColor: '#E65B6B'
    },

    fundoRespostaCerta: {
        backgroundColor: '#93E9ED'
    }
});