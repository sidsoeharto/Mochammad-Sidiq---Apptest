/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import tw from 'twrnc';
import {Section} from '../components';
import {fetchContacts} from '../store/actions';
import { connect } from 'react-redux';

const Home = ({navigation, ...props}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchContacts());
    });
    return unsubscribe;
  }, [dispatch, navigation]);

  const { contacts, dispatch } = props;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <View>
        {contacts.map((el, idx) => <Section
            key={idx}
            id={el.id}
            title={`${el.firstName} ${el.lastName}`}
            imageUrl={el.photo}
            navigation={navigation}
            avatarName={`${el.firstName[0].toUpperCase()}${el.lastName[0].toUpperCase()}`}
          >
            Age: {el.age}
          </Section>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView:[
    tw`w-full pb-8`,
    {
      backgroundColor: '#161621',
    },
  ],
});

function mapStateToProps(state) {
  const { contacts } = state;
  return {
    contacts,
  };
}

export default connect(mapStateToProps)(Home);
