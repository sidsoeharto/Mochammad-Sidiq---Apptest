/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let initialState = {
  contacts: [],
  contact: {},
  deleteId: null,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_CONTACTS':
      return {...state, contacts: action.contacts};
    case 'SET_CONTACT':
      return {...state, contact: action.contact};
    case 'SET_DELETE_ID':
      return {...state, contacts: action.deleteId};
    default:
      return initialState;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
