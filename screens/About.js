import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const About = ({navigation}) => {

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Sobre nosotros</Text>
        <Image source={require('../assets/qrcode.png')} style={styles.qrcode} />
        <Button title={'Cámara'} style={{fontSize:20, marginTop:20}} onPress = {() => {navigation.navigate('Identifier')}}/>
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
        fontSize: 30,
        fontWeight: "400",
        marginTop: 20
    },
    qrcode: {
      alignItems: "center",
      justifyContent: "center",
      height: 300,
      width: 300,
      marginVertical: 20
    },
});

export default About