import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, ScrollView } from 'react-native';
import { useContextState } from '../contextState'

const Home = ({navigation}) => {

  return (

    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>DAI-Hardware</Text>
            <TouchableOpacity onPress = {() => {
                navigation.navigate('EmergencyNumberConfiguration')}}>
                <Image
                style={styles.logo}
                source={{ uri: "https://images.vexels.com/media/users/3/208199/isolated/preview/6eb5ef1c35080a1a35508c20b1ddee32-icono-de-llamada-de-telefono-de-emergencia.png" }}
                />
            </TouchableOpacity>
            <Text style={styles.featureTitle}>Configuración de número de emergencia</Text>
        
            <TouchableOpacity onPress = {() => {
            navigation.navigate('Contacts')}}>
                <Image
                style={styles.logo}
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/1915/1915648.png" }}
                />
            </TouchableOpacity>
            <Text style={styles.featureTitle}>Contactos</Text>

        <Image
        style={styles.logo}
        source={{ uri: "https://images.vexels.com/media/users/3/299488/isolated/preview/8c8c1857cbcf222280a12a7f5a122abc-icono-de-tecnologa-a-de-burbujas-de-chat-de-mensaje.png" }}
        />
        <Text style={styles.featureTitle}>Mensajes al usuario</Text>
        
        <TouchableOpacity onPress = {() => {
        navigation.navigate('CurrentTimeTemperature')}}>
        <Image
        style={styles.logo}
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/2784/2784399.png" }}
        />
        </TouchableOpacity>
        <Text style={styles.featureTitle}>Hora actual/Temperatura</Text>
        
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