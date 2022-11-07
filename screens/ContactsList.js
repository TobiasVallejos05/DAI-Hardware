import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';
import Contact from '../components/Contact'

const ContactsList = () => {

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

    if (contactos.length === 0) return <View><Text style={styles.loading}>Cargando...</Text></View>

    return (
      <SafeAreaView>
          <FlatList
              data={contactos}
              renderItem={(data) => <Contact {...data.item} />}
              keyExtractor={item => item.id.toString()}
              style={styles.list}
          />
      </SafeAreaView>
    );
   }

   const styles = StyleSheet.create({
    loading: {
      justifyContent: "center",
      alignItems: "center"
    },
    list: {
      marginTop: 10
    },
    });

export default ContactsList