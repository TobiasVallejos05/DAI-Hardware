import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Contact = (contact) => {
  return (

    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{contact?.name}</Text>
      </View>
      
      <View>
        <Text style={styles.phoneNumber}>{contact?.phoneNumbers && contact?.phoneNumbers[0]?.number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20
  },
  text: {
    fontSize: 20
  },
  name: {
    fontSize: 16
  },
  phoneNumber: {
    color: "gray"
  },
});
export default Contact;