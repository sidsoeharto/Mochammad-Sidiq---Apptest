/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import tw from 'twrnc';
import { Header, Section } from '../components';

const Edit = ({ route, navigation }) => {
  const { id } = route.params;
  console.log(id);
  return (
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[tw`w-full`, {backgroundColor: '#161621'}]}>
        <Header />
        <View>
          <Text style={tw`text-white`}>{id}</Text>
          {/* <LearnMoreLinks /> */}
        </View>
    </ScrollView>
  );
};

export default Edit;
