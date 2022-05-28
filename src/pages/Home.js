/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import tw from 'twrnc';
import { Header, Section } from '../components';
import {useDispatch, useSelector, } from 'react-redux';
import {fetchContacts} from '../store/actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector((state) => state.contacts);

  console.log(contacts, 'dari home');

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[tw`w-full`, {backgroundColor: '#161621'}]}>
      <Header />
      <View>
        {contacts.map((el, idx) => <Section
            key={idx}
            id={el.id}
            title={`${el.firstName} ${el.lastName}`}
            imageUrl={el.photo}
            navigation={navigation}
          >
            Age: {el.age}
          </Section>
        )}
        {/* <LearnMoreLinks /> */}
      </View>
    </ScrollView>
  );
};

export default Home;
