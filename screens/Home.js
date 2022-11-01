import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, ScrollView } from 'react-native';
import { useContextState } from '../contextState'
import favicon from '../assets/favicon.png'
import EmergencyNumberConfiguration from './EmergencyNumberConfiguration';

const Home = ({navigation}) => {

  return (

    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>DAI-Hardware</Text>
            <TouchableOpacity onPress = {() => {
                navigation.navigate('EmergencyNumberConfiguration')}}>
                <Image
                style={styles.logo}
                source={favicon}
                />
            </TouchableOpacity>
            <Text style={styles.featureTitle}>Configuración de número de emergencia</Text>
        
            <TouchableOpacity onPress = {() => {
            navigation.navigate('ContactsList')}}>
                <Image
                style={styles.logo}
                source={favicon}
                />
            </TouchableOpacity>
            <Text style={styles.featureTitle}>Contactos</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('CurrentTimeTemperature')}}>
        <Image
        style={styles.logo}
        source={favicon}
        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Hora actual/Temperatura</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('BackgroundImageChanger')}}>
        <Image
        style={styles.logo}
        source={favicon}        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Cambio de imagen de fondo</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('FavouriteVideo')}}>
        <Image
        style={styles.logo}
        source={favicon}        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Video favorito</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('About')}}>
        <Image
        style={styles.logo}
        source={favicon}        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Identificación de cada aplicación</Text>
        
    </SafeAreaView>
    </ScrollView> 
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
        fontWeight: "500",
        marginTop: 20,
    },
    logo: {
        height: 150,
        width: 150,
        marginTop: 20,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: "300",
        marginTop: 10,
        marginBottom: 10
    },
    featureContainer: {
        flex: 2,
        flexDirection: 'column'
      },
});

export default Home