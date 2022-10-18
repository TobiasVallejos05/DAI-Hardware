import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useContextState } from '../contextState'
import { BarCodeScanner } from 'expo-barcode-scanner'

const About = ({navigation}) => {

  return (

    <View style={styles.container}>
        <Text style={styles.title}>About us</Text>
        <Image style={{height:300, width:300}}  />
        <Text style={{fontSize:20, marginTop:10, marginBottom:20}}>Hola</Text>
        <Button title={'Cámara'} style={{fontSize:20, marginTop:20}} onPress = {() => {navigation.navigate('Identifier')}}/>
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
        fontSize: 30,
        fontWeight: "400",
        marginTop: 20
    },
});

export default About