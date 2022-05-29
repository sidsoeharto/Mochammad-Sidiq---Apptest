/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import tw from 'twrnc';

import {Home,Edit,Create} from '../pages';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: [
    {
      backgroundColor: '#12131E',
    },
  ],
  headerTitleStyle: [
    tw`text-xl`,
    {
      fontFamily: 'Palanquin-Bold',
      fontSize: 20,
    },
  ],
  headerTitleContainerStyle: [
    tw`flex justify-center py-4`,
  ],
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown:true,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Simple Contacts" component={Home} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
};

const CreateStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Create Contact" component={Create} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, CreateStackNavigator };
