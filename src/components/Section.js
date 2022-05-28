/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Avatar, Icon, Button } from '@rneui/themed';
import {DeleteDialog} from './index';
import tw from 'twrnc';


const Section = ({children, title, imageUrl, id, navigation}) => {
  const [visible, setVisible] = useState(false);

  const toggleDialog = () => {
    return setVisible(!visible);
  };

  return (
    <View style={[
        styles.sectionContainer,
        tw`flex flex-row w-full`,
      ]}
    >
      <Avatar
        activeOpacity={0.2}
        avatarStyle={{
          flex: 1,
        }}
        containerStyle={{ backgroundColor: "#BBBBBB" }}
        icon={{}}
        iconStyle={{}}
        imageProps={{}}
        onLongPress={() => alert("onLongPress")}
        onPress={() => alert("onPress")}
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        rounded
        size={75}
        source={{ uri: imageUrl }}
        title="P"
        titleStyle={{}}
      />
      <View style={[
        styles.sectionContainer,
        tw`flex flex-col mt-0`,
        {
          flex: 2,
        }
      ]}>
        <Text style={tw`text-lg text-gray-200`}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            tw`text-lg text-gray-300`,
          ]}>
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
          onLongPress={() => console.log("onLongPress()")}
          onPress={() => navigation.navigate("Edit", {id})}
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Section;
