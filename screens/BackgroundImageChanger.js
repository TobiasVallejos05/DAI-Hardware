import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { useContextState } from '../contextState'
import ImagePicker, { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const BackgroundImageChanger = ({navigation}) => {
  
  const [image, setImage] = useState('https://via.placeholder.com/640x480');

  const selectImage = () => {

    const options = {
      title: "Selecciona una imagen",
      storageOptions: {
        skipBackup: true,
        path: "images",
      }
    }

    launchImageLibrary(options, response => {

      if(response.errorCode){
        console.log(response.errorMessage);
      } else if(response.didCancel){
        console.log("La selección de imagen fue cancelada");
      } else {
        const path = response.assets[0].uri
        setImage(path)
      } 
    })

  }

  const takePicture = () => {

    const options = {
      title: "Sacar foto",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
      includeBase64: true,
    }

    launchCamera(options, response => {

      if(response.errorCode){
        console.log(response.errorMessage);
      } else if(response.didCancel){
        console.log("El usuario canceló la fotografía");
      } else {
        const uri = response.assets[0].uri
        setImage(uri)
      }
    })
  }

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Cambio de Imagen de Fondo</Text>
        <View style={styles.buttonsPosition}>
        <Button
          title="Seleccionar imagen de la galería"
          onPress = {() => selectImage()}
        />
        <Button 
          title="Tomar foto de la cámara"
          onPress = {() => takePicture()}
        />
        </View>
        <Image 
          style = {{
            height: 640,
            width: 480,
            alignSelf: "center"
          }}
          source = {{ uri: image }}
        />
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
    buttonsPosition: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
    },
});

export default BackgroundImageChanger