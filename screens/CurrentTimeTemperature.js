import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { useContextState } from '../contextState'

const CurrentTimeTemperature = ({navigation}) => {

  let date = new Date();

  let minutes = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  minutes = ('0' + minutes).slice(-2);
  hour = ('0' + hour).slice(-2);
  day = ('0' + day).slice(-2);
  month = ('0' + month).slice(-2);

  let time = `${hour}:${minutes}`;
  let date2 = `${day}/${month}/${year}`;
  console.log(time);
  console.log(date2);

  return (

    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hora Actual/Temperatura</Text>
        <View>
          <Text style={styles.body}>{ time }</Text>
          <Text style={styles.body}>{ date2 }</Text>
        </View>
    </SafeAreaView> 
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
    body: {
        fontSize: 30,
        fontWeight: 300,
        marginVertical: 10,
    }
});

export default CurrentTimeTemperature