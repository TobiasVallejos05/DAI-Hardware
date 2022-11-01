import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, Video } from 'react-native';
import { useContextState } from '../contextState'
import { storeData, getData } from '../helpers/localStorage'

const EmergencyNumberConfiguration = ({navigation}) => {

  const [number, setNumber] = useState(5491140456982)

  return (

    <View style={styles.container}>
        <Text Astyle={styles.title}>Configuración de número de emergencia</Text>

        <Text>Tu número de emergencia es: +{number}</Text>
        <TextInput onChangeText={storeData(number, number)} keyboardType = 'numeric' placeholder="Numero de emergencia"></TextInput>
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
        fontSize: 20,
        fontWeight: "500",
        marginTop: 50
    },
});

export default EmergencyNumberConfiguration