import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, Video } from 'react-native';
import { storeData } from '../helpers/localStorage'

const EmergencyNumberConfiguration = () => {

  const [number, setNumber] = useState("40456982");
  const [error, setError] = useState(false)

  const saveNumber = async () => {
    setNumber(number);
    storeData("emergencyNumber", number)
  }

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Configuración de número de emergencia</Text>
        <Text style={styles.text}>Tu número de emergencia es:</Text>
        <Text style={styles.text}>+54911{number}</Text>
        <TextInput onChangeText={text => setNumber(text)} value={number} keyboardType = 'numeric' placeholder="Numero de emergencia" style={styles.input}></TextInput>
        {error && <Text style={styles.errorText}>La cantidad de dígitos tiene que ser 8</Text>}

        <Button
          title="CONFIRMAR"
          color="black"
          onPress={ () => {

             if (number.length < 8 || number.length > 8){
              setError(true)
              console.log("La cantidad de dígitos tiene que ser 8")
             
            }
            else {
                setError(false)
                console.log("El número de emergencia es +54911"+number)
                saveNumber()
            }    
          }} 
        />
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
        marginTop: 50,
        marginBottom: 20
    },
    input: {
        fontSize: 16,
        width: '80%',
        alignItems: 'center',
        borderWidth: 2,
        padding: 8,
        marginVertical: 20,
        backgroundColor: '#F4F4F4',
        justifyContent: "center"
      },
    text: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        fontWeight: "300",
      },
    errorText: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
        fontWeight: "300",
        marginBottom: 20
    }
});

export default EmergencyNumberConfiguration