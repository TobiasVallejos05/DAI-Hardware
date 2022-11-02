import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button, Video } from 'react-native';
import { storeData, getData } from '../helpers/localStorage'
import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';

const FavouriteVideo = () => {

  const [url, setUrl] = useState("");
  const [writtenUrl, setWrittenUrl] = useState("");
  
  const SaveURL = async () => {
    if (url != "") {
      storeData('URL', url)
    }
    else {
      Alert.alert("Ingrese una url")
    }
  }

  useEffect(() => {
    (async () => {

      const UrlSiendoGuardada = getData('URL')
      if (UrlSiendoGuardada) setWrittenUrl(UrlSiendoGuardada)
      setUrl(UrlSiendoGuardada)
    })()
  }, [])

  return (
    <View>
      <Text style={styles.title}>Video Favorito</Text>

      <TextInput
        onChangeText={(text) => setUrl(text)}
        value={url}
        placeholder="Ingrese URL"
      />

      <Button
        text="CONFIRMAR"
        onPress={() => {
          console.log(writtenUrl);
          SaveURL()
        }} 
      />
    

      {url != ""
        ?
        <VideoPlayer style={{ width: 400, height: 300, }}
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.CONTAIN,
            source: {
              uri: url
            },
          }}
        />
        :
        <Text>Ingrese una URL</Text>
      }
    </View>
  );
};

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