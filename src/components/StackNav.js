/* eslint-disable prettier/prettier */
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {Home,Edit,Create} from "../pages";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerShown:false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Edit" component={Edit} />
    </Stack.Navigator>
  );
}

const CreateStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Create Contact" component={Create} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, CreateStackNavigator };