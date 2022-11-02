import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, Video } from 'react-native';
import { storeData, getData } from '../helpers/localStorage'

const EmergencyNumberConfiguration = ({navigation}) => {

  const [number, setNumber] = useState(5491140456982)
  const [writtenNumber, setWrittenNumber] = useState("");
  
  const SaveNumber = async () => {
    if (number != "") {
      storeData('URL', number)
    }
    else {
      Alert.alert("Ingresa un número de teléfono")
    }
  }

  useEffect(() => {
    (async () => {

      const CelularSiendoGuardado = getData('URL')
      if (CelularSiendoGuardado) setWrittenUrl(CelularSiendoGuardado)
      setUrl(CelularSiendoGuardado)
    })()
  }, [number])

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Configuración de número de emergencia</Text>

        <Text>Tu número de emergencia es: +{number}</Text>
        <TextInput onChangeText={(text) => setUrl(text)} value={number} keyboardType = 'numeric' placeholder="Numero de emergencia"></TextInput>
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