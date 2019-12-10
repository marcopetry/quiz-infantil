import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import fundoTela from '../assets/backgroundInicio.png';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Perguntas(props) {
    const [primeiraResposta, setPrimeiraResposta] = useState('#339BA1'),
        [segundaResposta, setSegundaResposta] = useState('#339BA1'),
        [terceiraResposta, setTerceiraResposta] = useState('#339BA1'),
        [quartaResposta, setQuartaResposta] = useState('#339BA1');

    function escolheuResposta(resposta, id) {
        let cor;
        if (resposta === props.correta) {
            props.adicionarPontoRespostaCorreta();
            cor = '#CCFF33';
        } else {
            cor = '#E65B6B';
        }
        if (id === 0) {
            setPrimeiraResposta(cor);
            setTimeout(() => {
                setPrimeiraResposta('#339BA1');
                props.passarPergunta();
            }, 500);
            return;
        }

        if (id === 1) {
            setSegundaResposta(cor);
            setTimeout(() => {
                setSegundaResposta('#339BA1');
                props.passarPergunta();
            }, 500);
            return;
        }

        if (id === 2) {
            setTerceiraResposta(cor);
            setTimeout(() => {
                setTerceiraResposta('#339BA1');
                props.passarPergunta();
            }, 500);
            return;
        }

        if (id === 3) {
            setQuartaResposta(cor);
            setTimeout(() => {
                setQuartaResposta('#339BA1');
                props.passarPergunta();
            }, 500);
            return;
        }
    }

    return (
        <ImageBackground source={fundoTela} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.viewText]} >
                        <Text style={styles.header}>Pergunta {(props.contador + 1)}:</Text>
                        <Text style={[styles.text, styles.pergunta]}>{props.enunciado}</Text>
                    </View>

                    <View style={[styles.viewText]} >
                        <TouchableOpacity style={[styles.viewRespostas, { backgroundColor: primeiraResposta }]} onPress={() => escolheuResposta(props.alternativa[0], 0)}>
                            <Text style={styles.text} >{props.alternativa[0]}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewText]}>
                        <TouchableOpacity style={[styles.viewRespostas, { backgroundColor: segundaResposta }]} onPress={() => escolheuResposta(props.alternativa[1], 1)}>
                            <Text style={[styles.text]}>{props.alternativa[1]}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewText]}>
                        <TouchableOpacity style={[styles.viewRespostas, { backgroundColor: terceiraResposta }]} onPress={() => escolheuResposta(props.alternativa[2], 2)}>
                            <Text style={[styles.text, styles.resposta]}>{props.alternativa[2]}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewText]}>
                        <TouchableOpacity style={[styles.viewRespostas, { backgroundColor: quartaResposta }]} onPress={() => escolheuResposta(props.alternativa[3], 3)}>
                            <Text style={styles.text}>{props.alternativa[3]}</Text>
                        </TouchableOpacity>
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
        alignSelf: 'center',
        alignContent: 'center',
        marginVertical: 20,
        width: wp('80%'),
        borderRadius: 10
    },

    viewText: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        marginVertical: 5,
        borderRadius: 10
    },

    viewRespostas: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
    },

    header: {
        marginLeft: 15,
        marginBottom: 5
    },

    pergunta: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5
    },

    text: {
        padding: 15,
    },
});