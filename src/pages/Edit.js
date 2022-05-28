/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  TextInput,
  ScrollView,
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native';
import tw from 'twrnc';
import { Header, Section } from '../components';
// import {useDispatch, useSelector} from 'react-redux';
import { updateContact, fetchContact } from '../store/actions';
import { connect } from "react-redux";

const Edit = ({ route, navigation, ...props }) => {
  const { contact, dispatch } = props;

  console.log(props);
  const { id } = route.params;
  console.log(id);

  useEffect(() => {
    dispatch(fetchContact(id));
  }, [dispatch, id]);

  console.log(contact);

  const handleChange = (val, name) => {
    return setDataForm(oldState => ({
      ...oldState,
      [name]: val,
    }));
  };

  const handleSubmit = async (payload) => {
    console.log(payload);
    await dispatch(updateContact(payload, id));

    return navigation.navigate("Home");
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDataForm(contact);
    });
    return unsubscribe;
  }, [navigation, contact]);

  const [dataForm, setDataForm] = useState(contact);

  return (
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[tw`w-full`, {backgroundColor: '#161621'}]}>
        <Header />
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
              value={dataForm["firstName"]}
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
              value={dataForm["lastName"]}
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
              maxLength={3}
              onChangeText={(val) => handleChange(val, 'age')}
              value={dataForm["age"]}
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
              value={dataForm['photo']}
            />
          </View>
          <Button
            style={styles.buttonSubmit}
            title={'Submit'}
            onPress={() => handleSubmit(dataForm)}
          />
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
    }
  ],
  input:[
    tw`bg-gray-700 border border-gray-900 text-gray-100 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3`,
    {
      fontFamily: 'Palanquin-Regular',
      fontWeight: '500',
      fontSize: 14,
    }
  ],
  inputField: [
    tw`mb-1`
  ],
  inputFieldLast: [
    tw`mb-8`
  ],
  buttonSubmit: [
    tw`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-green-800 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700`
  ]
});

function mapStateToProps(state) {
  const { contact } = state;
  return {
    contact
  };
}

export default connect(mapStateToProps)(Edit);
