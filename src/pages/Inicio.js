import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../assets/logo.png';

// Color palette
// #339BA1
// #236A6E
// #93E9ED
// #E65B6B

global.portugues = 0;
global.matematica = 0;
global.quimica = 0;
global.historia = 0;

export default function Inicio({ navigation }) {

  function handleJogar() {
    navigation.navigate('Temas');  
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} style={styles.image}/>

      <View style={styles.content}>
        <TouchableOpacity onPress={handleJogar} style={styles.button}>
          <Text style={styles.buttonText}>Jogar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 440,
    height: 130
  },

  content: {
    alignSelf: 'stretch',
    alignItems: 'center',
    //paddingHorizontal: 60,
    marginTop: 30,
  },

  button: {
    height: 42,
    width: '80%',
    backgroundColor: '#E65B6B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
  },
});
