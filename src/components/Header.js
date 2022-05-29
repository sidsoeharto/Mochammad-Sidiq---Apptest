/* eslint-disable prettier/prettier */
import React from 'react';

import {Text, View,StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Simple Contacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label:[
    {
      fontFamily: 'Palanquin-Bold',
      fontWeight: '700',
    }
  ],
  container:[
    {backgroundColor: '#161621'},
  ]
})

export default Header;
