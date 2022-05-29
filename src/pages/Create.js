/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  TextInput,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import tw from 'twrnc';
import {useDispatch} from 'react-redux';
import { createContact } from '../store/actions';

const Create = ({navigation}) => {
  const dispatch = useDispatch();

  const [dataForm, setDataForm] = useState({
    firstName:'',
    lastName:'',
    age:'',
    photo:'',
  });

  const handleChange = (val, name) => {
    return setDataForm(oldState => ({
      ...oldState,
      [name]: val,
    }));
  };

  const handleSubmit = async (payload) => {
    await dispatch(createContact(payload));

    return navigation.navigate('Simple Contacts');
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDataForm({
        firstName:'',
        lastName:'',
        age:'',
        photo:'',
      });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[tw`w-full`, {backgroundColor: '#161621'}]}>
        <View style={tw`p-8`}>
          <View
            style={styles.inputField}
          >
            <Text
              style={styles.label}
            >
              First Name
            </Text>
            <TextInput
              style={styles.input}
              autoComplete={'name-prefix'}
              onChangeText={(val) => handleChange(val, 'firstName')}
              value={dataForm.firstName}
            />
          </View>
          <View
            style={styles.inputField}
          >
            <Text
              style={styles.label}
            >
              Last Name
            </Text>
            <TextInput
              style={styles.input}
              autoComplete={'name-suffix'}
              onChangeText={(val) => handleChange(val, 'lastName')}
              value={dataForm.lastName}
            />
          </View>
          <View
            style={styles.inputField}
          >
            <Text
              style={styles.label}
            >
              Age
            </Text>
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              maxLength={2}
              onChangeText={(val) => handleChange(Number(val), 'age')}
              value={dataForm.age}
            />
          </View>
          <View
            style={styles.inputFieldLast}
          >
            <Text
              style={styles.label}
            >
              Photo URL
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => handleChange(val, 'photo')}
              value={dataForm.photo}
            />
          </View>
          <Pressable
            style={styles.buttonSubmit}
            onPress={() => handleSubmit(dataForm)}
          >
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label:[
    tw`text-gray-100 p-1 mb-1`,
    {
      fontFamily: 'Palanquin-SemiBold',
      fontWeight: '600',
      fontSize: 16,
    },
  ],
  input:[
    tw`bg-gray-700 border border-gray-900 text-gray-100 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3`,
    {
      fontFamily: 'Palanquin-Regular',
      fontWeight: '500',
      fontSize: 14,
    },
  ],
  inputField: [
    tw`mb-1`,
  ],
  inputFieldLast: [
    tw`mb-8`,
  ],
  buttonSubmit: [
    tw`py-1.5 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-sky-500 rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700`,
  ],
  submitText: [
    tw`text-white text-center font-semibold`,
    {
      fontFamily: 'Palanquin-SemiBold',
      fontWeight: '600',
      fontSize: 16,
    },
  ],
});

export default Create;
