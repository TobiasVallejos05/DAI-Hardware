import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar, Button } from 'react-native';
import { useContextState } from '../contextState'
import * as Contacts from 'expo-contacts';
import Contact from '../components/Contact'

const ContactsList = ({navigation}) => {

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });
            if(data.length > 0) {
              setContactos(data)
            }
          }
        })();
      },[]);

    if (contactos.length === 0) return <View><Text>Cargando...</Text></View>

    return (
      <SafeAreaView>
          <FlatList
              data={contactos}
              renderItem={(data) => <Contact {...data.item} />}
              keyExtractor={item => item.id.toString()}
          />
      </SafeAreaView>
    );
   }
   
   /* const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {

        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 15,
      }
    }); */

export default ContactsList