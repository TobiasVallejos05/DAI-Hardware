import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, Video } from 'react-native';
import { useContextState } from '../contextState'

const EmergencyNumberConfiguration = ({navigation}) => {

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Configuración de número de emergencia</Text>
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