import { View, Text, Alert, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'

const API_KEY = 'a1d744d9c71573bb9a7db5949ee8e32c';
let url = `http://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=minutely&appid=${API_KEY}`;

const Weather = () => {
  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = async () => {
    setRefreshing(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Acceso denegado a la ubicación");
    }

    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

    const response = await fetch(`${url}&lat=${location.coords.latitude}&lon${location.coords.longitude}`);
    const data = await response.json();

    if(!response.ok){
      Alert.alert("Error, algo salió mal");
    } else {
      setForecast(data);
    }
    setRefreshing(false);
  }

  useEffect(() => {
    loadForecast();
  },[]);

 if(!forecast){
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  } 

  const current = forecast.current.weather[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
          refreshing={refreshing}
          onRefresh={() => loadForecast()} />
        }
        style={{marginTop:50}} >
        <Text style={styles.title}>
          Current Weather
        </Text>
        <Text style={{alignItems:"center", textAlign:"center"}}>
          Your Location
        </Text>
        <View style={styles.current}>
          <Image
            style={styles.largeIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${current.icon}@4x.png`
            }} />
            <Text style={styles.currentTemp}>
              {Math.round(forecast.current.temp)}°C
            </Text>
        </View>

        <Text style={styles.currentDescription}>
          {current.description}
        </Text>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              // source={require("../assets/temp.png")}
              // style={{width:40, height:40, borderRadius:40/2, marginLeft:50}}
            />
            <Text style={styles.text}>
              {forecast.current.feels_like}°C 
            </Text>
            <Text style={styles.text}>
              Feels Like
            </Text>
          </View>
          <View style={styles.info}>
            <Image
              // source={require("../assets/humidity.png")}
              // style={{width:40, height:40, borderRadius:40/2, marginLeft:50}}
            />
            <Text style={styles.text}>
              {forecast.current.humidity}% 
            </Text>
            <Text style={styles.text}>
              Humidity
            </Text>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "lightgray"
  },
  title: {
      fontSize: 36,
      fontWeight: 'bold',
      textAlign:"center",
      color:"black"
  },
  current: {
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",
  },
  largeIcon:{
    width:300,
    height:250,
  },
  currentTemp:{
    fontSize:32,
    fontWeight:"bold",
    textAlign:"center",
  },
  currentDescription: {
    width: "100%",
    textAlign: "center",
    fontWeight:"200",
    fontSize:24,
    marginBottom:5
  },
  info:{
    width: Dimensions.get('screen').width/2.5,
    backgroundColor:'white',
    padding: 10,
    borderRadius:15,
    justifyContent:"center"
  },
  extraInfo:{
    flexDirection:"row",
    marginTop:20,
    justifyContent:"space-between",
    padding:10
  },
  text:{
    fontSize:20,
    color:"black",
    textAlign:"center"
  },
});

export default Weather