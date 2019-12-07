import React, { useState } from 'react';
import { View, ScrollView, FlatList, KeyboardAvoidingView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Main() {
  
  return (  
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.titleText}>Temas</Text>
      
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          <View style={styles.rowTema}>
            <View style={styles.tema}>
              <Image source={logo} style={styles.iconeTema}/>
              <Text style={styles.timeCasaText}>História</Text>
            </View>
            
            <View style={styles.tema}>
              <Image source={logo} style={styles.iconeTema}/>
              <Text style={styles.timeCasaText}>Português</Text>
            </View>
          </View>
          
          <View style={styles.rowTema}>
            <View style={styles.tema}>
              <Image source={logo} style={styles.iconeTema}/>
              <Text style={styles.timeCasaText}>Matemática</Text>
            </View>
            
            <View style={styles.tema}>
              <Image source={logo} style={styles.iconeTema}/>
              <Text style={styles.timeCasaText}>Química</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  scroll: {
    flex: 1,
    alignSelf: 'stretch',
  },

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  titleText: {
    color: '#236A6E',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
  },

  iconeTema: {
    width: 50,
  },

  rowTema: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
