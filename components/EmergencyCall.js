import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { useContextState } from '../contextState'
import { Accelerometer } from 'expo-sensors'

const EmergencyCall = ({navigation}) => {

    const [data, setData] = useState({});
    const { x, y, z } = data;
    const [message, setMessage] = useState(null);

    /* const slow = () => {
        Accelerometer.setUpdateInterval(1000);
    };
    
    const fast = () => {
        Accelerometer.setUpdateInterval(16);
    }; */

    const _subscribe = () => {
        setMessage(Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
          })
        );
      };
    
    useEffect(() => {
        _subscribe();
    },[]);

    /* const sendSMS = async () => {
        await Linking.openURL("sms:+541140456982?body='Este es un mensaje predeterminado'")
    } */

    const sendWhatsApp = async () => {
        await Linking.openURL("https://wa.me/+541140456982?text='Este es un mensaje predeterminado'")
    }
}

export default EmergencyCall