import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { useContextState } from '../contextState'

const Home = ({navigation}) => {

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
        <TouchableOpacity onPress = {() => {
        navigation.navigate('FavouriteVideo')}}>
        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Configuración de número de emergencia</Text>
        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        <Text style={styles.featureTitle}>Contactos</Text>
        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        <Text style={styles.featureTitle}>Mensajes al usuario</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('CurrentTimeTemperature')}}>
        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Hora actual/Temperatura</Text>
    


        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        <Text style={styles.featureTitle}>Llamado de emergencia</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('BackgroundImageChanger')}}>
        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Cambio de imagen de fondo</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('FavouriteVideo')}}>
        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Video favorito</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('Identifier')}}>
        <Image
        style={styles.logo}
        source={{ uri: "https://lastfm.freetls.fastly.net/i/u/ar0/2bf2a1d2dbeb48f6c827e8a3d8601044.jpg" }}
        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Identificación de cada aplicación</Text>
               
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
        marginTop: 20,
    },
    logo: {
        height: 150,
        width: 150,
        marginTop: 20,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: 300,
        marginTop: 10,
        marginBottom: 10
    },
    featureContainer: {
        flex: 2,
        flexDirection: 'column'
      },
});

export default Home