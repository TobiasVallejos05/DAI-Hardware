import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { useContextState } from '../contextState'
import Weather from '../components/Weather';

const CurrentTimeTemperature = ({navigation}) => {

  let datetime = new Date();

  let minutes = datetime.getMinutes();
  let hour = datetime.getHours();
  let weekDay = datetime.getDay();
  let day = datetime.getDate();
  let month = datetime.getMonth() + 1;
  let year = datetime.getFullYear();

  let dayName = "";
  if(weekDay == 1){
    dayName = "Lunes";
  }
  if(weekDay == 2){
    dayName = "Martes";
  }
  if(weekDay == 3){
     dayName = "Miércoles";
  }
  if(weekDay == 4){
    dayName = "Jueves";
  }
  if(weekDay == 5){
    dayName = "Viernes";
  }
  if(weekDay == 6){
     dayName = "Sábado";
  }
  if(weekDay == 7){
    dayName = "Domingo";
  }

  let monthName = "";
  if(month == 1){
    monthName = "enero";
  }
  if(month == 2){
    monthName = "febrero";
  }
  if(month == 3){
    monthName = "marzo";
  }
  if(month == 4){
    monthName = "abril";
  }
  if(month == 5){
    monthName = "mayo";
  }
  if(month == 6){
    monthName = "junio";
  }
  if(month == 7){
    monthName = "julio";
  }
  if(month == 8){
    monthName = "agosto";
  }
  if(month == 9){
    monthName = "septiembre";
  }
  if(month == 10){
    monthName = "octubre";
  }
  if(month == 11){
    monthName = "noviembre";
  }
  if(month == 12){
    monthName = "diciembre";
  } 

  minutes = ('0' + minutes).slice(-2);
  hour = ('0' + hour).slice(-2);

  let time = `${hour}:${minutes}`;
  let date = `${dayName}, ${day} de ${monthName} de ${year}`;
  console.log(time);
  console.log(date);
 
  return (

    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hora Actual/Temperatura</Text>
        <View style={styles.container}>
          <Text style={styles.body}>{ time }</Text>
          <Text style={styles.body}>{ date }</Text>
          <Weather />
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
        fontWeight: "500",
        marginTop: 20
    },
    body: {
        fontSize: 20,
        fontWeight: "300",
        marginVertical: 10,
    }
});

export default CurrentTimeTemperature