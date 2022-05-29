/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';

import { MainStackNavigator, CreateStackNavigator } from './StackNav';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  tabBarStyle: [
    { backgroundColor: '#12131E', border: '1px solid #12131E' },
    tw`py-1`,
  ],
  headerShown:false,
};

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={screenOptionStyle}
    >
      <Tab.Screen
        options={{
          tabBarIcon:({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={26}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: 'Palanquin-SemiBold',
            // fontWeight: 600,
            fontSize: 10,
            marginTop: -2,
          },
          tabBarInactiveTintColor: '#e0f2fe',
          tabBarActiveTintColor: '#38bdf8',
        }}
        name="Home"
        component={MainStackNavigator} />
      <Tab.Screen
        options={{
          tabBarIcon:({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={26}
            />
          ),
          tabBarLabelStyle: {
            fontFamily: 'Palanquin-SemiBold',
            // fontWeight: 600,
            fontSize: 10,
            marginTop: -2,
          },
          tabBarInactiveTintColor: '#e0f2fe',
          tabBarActiveTintColor: '#38bdf8',
        }}
        name="Create"
        component={CreateStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomNav;
