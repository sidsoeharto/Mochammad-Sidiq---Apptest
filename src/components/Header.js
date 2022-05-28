/* eslint-disable prettier/prettier */
import React from 'react';

import {Text, View,StyleSheet} from 'react-native';

import tw from 'twrnc';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Simple Contacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label:[
    tw`text-xl font-bold text-white text-center`,
    {
      fontFamily: 'Palanquin-Bold',
      fontWeight: '700',
    }
  ],
  container:[
    tw`p-4 flex justify-center`,
    {backgroundColor: '#161621'},
  ]
})

export default Header;
