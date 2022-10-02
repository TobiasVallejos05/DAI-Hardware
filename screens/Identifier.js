import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { useContextState } from '../contextState'

const Identifier = ({navigation}) => {

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Identificación de Cada Aplicación</Text>
    </View> 
  ); 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontWeight: 500,
        marginTop: 20
    },
});

export default Identifier