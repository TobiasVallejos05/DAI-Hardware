import React, { useState, useEffect } from 'react';
import { Text, TextInput, Image, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { getData } from '../helpers/localStorage';

const whatsAppMessage = "whatsapp://send?text=Este es un mensaje de emergencia&phone="

const Home = ({navigation}) => {
    
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      });
      const [subscription, setSubscription] = useState(null);
    
      const _slow = () => {
        Accelerometer.setUpdateInterval(1000);
      };
    
      const _fast = () => {
        Accelerometer.setUpdateInterval(16);
      };
    
      const _subscribe = () => {
        setSubscription(
          Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
          })
        );
      };
    
      const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
      };
    
      useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
      }, []);

      const number = getData("emergencyNumber");
      
  const { x, y, z } = data;
       if(x>2 || y>2 || z>2){
            Linking.openURL(`${whatsAppMessage}54911${number}`)
         }

  return (

    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>DAI-Hardware</Text> 
             
            <TouchableOpacity onPress = {() => {
              navigation.navigate('EmergencyNumberConfiguration')}}>
                <Image
                  style={styles.logo}
                  source={require('../assets/telephone.png')}
                />
            </TouchableOpacity>
            <Text style={styles.featureTitle}>Configuración de Número de Emergencia</Text>
            
            <TouchableOpacity onPress = {() => {
            navigation.navigate('ContactsList')}}>
                <Image
                style={styles.logo}
                source={require('../assets/contacts.png')}
                />
            </TouchableOpacity>
            <Text style={styles.featureTitle}>Contactos</Text>
        
            <TouchableOpacity onPress = {() => {
            navigation.navigate('CurrentTimeTemperature')}}>
                <Image
                style={styles.logo}
                source={require('../assets/clock.png')}
                />
            </TouchableOpacity>
            <Text style={styles.featureTitle}>Hora actual/Temperatura</Text>
        
            <TouchableOpacity onPress = {() => {
            navigation.navigate('About')}}>
                <Image
                    style={styles.logo}
                    source={require('../assets/camera.png')}      
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
        fontWeight: "400",
        marginTop: 10,
        marginBottom: 10
    },
    featureContainer: {
        flex: 2,
        flexDirection: 'column'
      },
});

export default Home