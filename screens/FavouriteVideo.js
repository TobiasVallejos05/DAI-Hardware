import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { useContextState } from '../contextState'

const FavouriteVideo = ({navigation}) => {

    const volverAtras = () => {
        navigation.push('Home')
      }

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Video Favorito</Text>
        <Button style={styles.button} title="Go back" color="red" onPress = {volverAtras}></Button>
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
    button: {
        color: "black",
        title: "Go back"
    }
});

export default FavouriteVideo