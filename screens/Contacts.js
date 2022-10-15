import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import EmergencyCall from '../components/EmergencyCall';
import { useContextState } from '../contextState'

const Contacts = ({navigation}) => {
    
    const {contextState, setContextState} = useContextState();

    /* const renderItem ({ item }) => {
        
    }

    return (

    <View style={styles.container}>
        <Text style={styles.title}>Contactos</Text>
            <FlatList
                data={ contextState.contacts }
                keyExtractor={(item) => item.phoneNumber}
                renderItem={renderItem}
            />
            <Text>{contextState.contacts.name} </Text>
            <Text>{contextState.contacts.surname} </Text>
            <Text>{contextState.contacts.phoneNumber} </Text>
    </View> 
  ); */

  return (
    <View>
        <EmergencyCall />
    </View>

  )
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
});

export default Contacts