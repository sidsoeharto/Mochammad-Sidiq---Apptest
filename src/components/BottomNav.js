/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Create} from '../pages';
import tw from 'twrnc';

import { MainStackNavigator, CreateStackNavigator } from "./StackNav";

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          { position: 'absolute', backgroundColor: '#12131E', border: '1px solid #12131E' },
          tw`py-1 my-4`
        ],
        headerShown:false,
      }}
    >
      <Tab.Screen name="Home"  component={MainStackNavigator} />
      <Tab.Screen name="Create" component={CreateStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomNav;