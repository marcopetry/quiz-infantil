import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

// Color palette
// #339BA1
// #236A6E
// #93E9ED
// #E65B6B

export default function Inicio({ navigation }) {

  function handleJogar() {
    navigation.navigate('Temas');  
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} />

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

  content: {
    alignSelf: 'stretch',
    paddingHorizontal: 100,
    marginTop: 30,
  },

  button: {
    height: 42,
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
