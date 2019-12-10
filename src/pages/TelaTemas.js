import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import matematica from '../assets/icon-matematica.png';
import portugues from '../assets/icon-portugues.png';
import personagens from '../assets/personagens-icon.png';
import ingles from '../assets/ingles-icon.png';
import questoesPortugues from '../../bancoQuestoes/portugues.json';
import questoesMatematica from '../../bancoQuestoes/matematica.json';
import questoesIngles from '../../bancoQuestoes/ingles.json';
import questoesPersonagens from '../../bancoQuestoes/personagensInfantis.json'

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
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', { questoes: questoesIngles, materia: 'ingles' })}>
                        <View style={styles.viewImage}>
                            <Image source={ingles} style={styles.image} />
                            <Text>Inglês</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', { questoes: questoesPersonagens, materia: 'personagens' })}>
                        <View style={styles.viewImage}>
                            <Image source={personagens} style={styles.image} />
                            <Text>Personagens</Text>
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
        marginBottom: 5, 
        borderWidth: 5
    },

});
