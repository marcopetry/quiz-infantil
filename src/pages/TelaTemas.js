import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import matematica from '../assets/icon-matematica.png';
import portugues from '../assets/icon-portugues.png';
import historia from '../assets/icon-historia.png';
import quimica from '../assets/icon-quimica.png';
import questoesPortugues from '../../bancoQuestoes/portugues.json';

export default function TelaTemas({navigation}) {
    
    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <View style={styles.viewsIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', {questoes: questoesPortugues, materia: 'portugues'})}>
                        <View style={styles.viewImage}>
                            <Image source={portugues} style={styles.image}/>
                            <Text>Português</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', {questoes: questoesPortugues, materia: ',matematica'})}>
                        <View style={styles.viewImage}>
                            <Image source={matematica} style={styles.image}/>
                            <Text>Matemática</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewsIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', {questoes: questoesPortugues, materia: 'quimica'})}>
                        <View style={styles.viewImage}>
                            <Image source={quimica} style={styles.image}/>
                            <Text>Química</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perguntas', {questoes: questoesPortugues, materia: 'historia'})}>
                        <View style={styles.viewImage}>
                            <Image source={historia} style={styles.image}/>
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
        marginVertical: 40
    },

    viewsIcons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },

    viewImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 150,
        height: 150,
        marginBottom: 10
    },  

});
