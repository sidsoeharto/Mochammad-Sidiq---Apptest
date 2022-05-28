/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet,View,Modal} from 'react-native';
// import {Dialog} from '@rneui/themed';
import Dialog from "react-native-dialog";
import tw from 'twrnc';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/actions';

const DeleteDialog = ({visible, id, toggleDialog}) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteContact(id));

    return toggleDialog;
  };

  return (
    <Dialog.Container
      visible={visible}
      onBackdropPress={toggleDialog}
      contentStyle={styles.dialog}
    >
      <View>
        <Dialog.Title style={styles.dialogTitle}>
          Delete this contact?
        </Dialog.Title>
        <Text style={styles.dialogText}>
          Are you sure you want to delete this contact?
        </Text>
        <View style={styles.buttonContainer}>
          <Dialog.Button label="Cancel" onPress={toggleDialog} />
          <Dialog.Button label="Delete" onPress={handleDelete} />
        </View>
      </View>
    </Dialog.Container>
  );
};

const styles = StyleSheet.create({
  dialog: [
    tw`flex flex-col justify-center text-center bg-gray-700 rounded-xl border-4 border-gray-800`,
  ],
  dialogTitle: [
    tw`text-center font-bold text-xl text-gray-100 mb-4`,
  ],
  dialogText: [
    tw`text-center font-semibold text-md text-gray-100 mb-4`,
  ],
  buttonContainer: [
    tw`flex flex-row gap-x-6 justify-center`
  ]
})

export default DeleteDialog;