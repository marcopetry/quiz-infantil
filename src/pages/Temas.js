import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Main() {
  
  return (  
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text>Main</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
