import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import matematica from '../assets/icon-matematica.png';
import portugues from '../assets/icon-portugues.png';
import historia from '../assets/icon-historia.png';
import quimica from '../assets/icon-quimica.png';
import questoesPortugues from '../../bancoQuestoes/portugues.json';
import questoesMatematica from '../../bancoQuestoes/matematica.json';

let marginTelaTemas = 5;
let marginTopTelaGrande = 5;
export default function TelaTemas({ navigation }) {

    //configura as margens para ficar tudo numa mesma tela bem disposto, em smarthphont ou tv
    //esses styles estão conifgurados nas views do componente
    if(Dimensions.get('screen').height > 400){
        marginTelaTemas = 70;
        marginTopTelaGrande = 40;
    }

    return (
        <ScrollView>
            <View style={[styles.container, {marginVertical: marginTelaTemas}]}>
                <View style={styles.viewsIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', { questoes: questoesPortugues, materia: 'portugues' })}>
                        <View style={styles.viewImage}>
                            <Image source={portugues} style={styles.image} />
                            <Text>Português</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', { questoes: questoesMatematica, materia: 'matematica' })}>
                        <View style={styles.viewImage}>
                            <Image source={matematica} style={styles.image} />
                            <Text>Matemática</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.viewsIcons, {marginTop: marginTopTelaGrande}]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', { questoes: questoesPortugues, materia: 'quimica' })}>
                        <View style={styles.viewImage}>
                            <Image source={quimica} style={styles.image} />
                            <Text>Química</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', { questoes: questoesPortugues, materia: 'historia' })}>
                        <View style={styles.viewImage}>
                            <Image source={historia} style={styles.image} />
                            <Text>História</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    viewsIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 5
    },

    viewImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 5
    },

});
