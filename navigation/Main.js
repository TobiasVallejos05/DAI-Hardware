import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import EmergencyNumberConfiguration from '../screens/EmergencyNumberConfiguration'
import ContactsList from '../screens/ContactsList';
import CurrentTimeTemperature from '../screens/CurrentTimeTemperature';
import About from '../screens/About'
import Identifier from '../screens/Identifier';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {headerShown:false}
           }>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="EmergencyNumberConfiguration"
          component={EmergencyNumberConfiguration}
        /> 
        <Stack.Screen
          name="ContactsList"
          component={ContactsList}
        /> 
        <Stack.Screen
          name="CurrentTimeTemperature"
          component={CurrentTimeTemperature}
        />

        <Stack.Screen
          name="About"
          component={About}
        />
        <Stack.Screen
          name="Identifier"
          component={Identifier}
        />   
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main