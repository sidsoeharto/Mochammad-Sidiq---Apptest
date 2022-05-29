/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import {DeleteDialog} from './index';
import tw from 'twrnc';


const Section = ({children, title, imageUrl, id, navigation, avatarName}) => {
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    return setVisible(!visible);
  };

  return (
    <View style={styles.sectionContainer}
    >
      <Avatar
        activeOpacity={0.2}
        avatarStyle={{}}
        // containerStyle={{ backgroundColor: '#BBBBBB' }}
        icon={{}}
        iconStyle={{}}
        imageProps={{}}
        overlayContainerStyle={{backgroundColor: ('#' + Math.floor(Math.random() * 16777215).toString(16))}}
        placeholderStyle={{}}
        rounded
        size={75}
        source={{ uri: imageUrl }}
        title={avatarName}
        titleStyle={{}}
      />
      <View style={styles.sectionContent}>
        <Text style={styles.sectionTitle}>
          {title}
        </Text>
        <Text
          style={styles.sectionDescription}>
          {children}
        </Text>
      </View>
      <View
        style={[
          tw`flex flex-col`,
        ]}
      >
        <Icon
          color="#FDDA0D"
          containerStyle={tw`mb-6`}
          disabledStyle={{}}
          iconProps={{}}
          iconStyle={{}}
          name="edit"
          onPress={() => navigation.navigate('Edit', {id})}
          size={20}
          type="material"
        />
        <Icon
          color="#B22222"
          containerStyle={tw`mb-6`}
          disabledStyle={{}}
          iconProps={{}}
          iconStyle={{}}
          name="delete"
          onPress={() => setVisible(true)}
          size={20}
          type="material"
        />
        <DeleteDialog
          visible={visible}
          toggleDialog={toggleDialog}
          id={id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: [
    tw`flex flex-row w-full mt-6`,
    {
      // marginTop: 32,
      paddingHorizontal: 24,
      flex: 2,
    },
  ],
  sectionContent: [
    tw`flex flex-col my-2`,
    {
      // marginTop: 32,
      paddingHorizontal: 24,
      flex: 2,
    },
  ],
  sectionTitle: [
    tw`text-xl text-gray-200 -mb-2`,
    {
      fontWeight: '600',
      fontFamily: 'Palanquin-Bold',
    },
  ],
  sectionDescription: [
    tw`text-lg text-gray-300`,
    {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      fontFamily: 'Palanquin-Regular',
    },
  ],
  highlight: {
    fontWeight: '700',
  },
});

export default Section;
