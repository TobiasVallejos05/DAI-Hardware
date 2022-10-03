import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Contacts from '../screens/Contacts';
import CurrentTimeTemperature from '../screens/CurrentTimeTemperature';
import BackgroundImageChanger from '../screens/BackgroundImageChanger';
import FavouriteVideo from '../screens/FavouriteVideo';
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
          name="Contacts"
          component={Contacts}
        /> 
        <Stack.Screen
          name="CurrentTimeTemperature"
          component={CurrentTimeTemperature}
        /> 
        <Stack.Screen
          name="BackgroundImageChanger"
          component={BackgroundImageChanger}
        /> 
        <Stack.Screen
          name="FavouriteVideo"
          component={FavouriteVideo}
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