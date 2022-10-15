import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useContextState } from '../contextState'
import { BarCodeScanner } from 'expo-barcode-scanner'

const Identifier = ({navigation}) => {
  
  const [permission, setPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Todavía no hay nada escaneado');

  const cameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status == 'granted')
    })
  };

  useEffect(() => {
    cameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData " + data)
  };

  if (permission === null) {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Esperando respuesta...</Text>
      </View>
    )
  };

  if (permission === false) {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Acceso denegado</Text>
      </View>
    )
  }

  return (

    <View style={styles.container}>
        <Text style={styles.title}>Acceso permitido</Text>
        <BarCodeScanner 
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 350, width: 350, marginTop:20 }} />
        <Text style={{fontSize:20, marginTop:10}}>{text}</Text>

        {scanned && <Button title={'Volver a escanear'} style={{fontSize:20, marginTop:10}}  onPress={() => setScanned(false)} /> }
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
});

export default Identifier