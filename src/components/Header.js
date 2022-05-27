import React from 'react';
import type {Node} from 'react';

import {Text, View} from 'react-native';

import tw from 'twrnc';

const Header: () => Node = () => {
  return (
    <View style={tw`p-4 bg-gray-200 dark:bg-black`}>
      <Text style={tw`text-lg text-black dark:text-white`}>Contacts</Text>
    </View>
  )
}

export default Header;
