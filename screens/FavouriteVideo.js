import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, Video } from 'react-native';
import { useContextState } from '../contextState'

const FavouriteVideo = ({navigation}) => {


  return (

    <View style={styles.container}>
        <Text style={styles.title}>Video Favorito</Text>
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
        fontWeight: "500",
        marginTop: 20
    },
});

export default FavouriteVideo