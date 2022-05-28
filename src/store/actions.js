/* eslint-disable prettier/prettier */
import axios from '../config/axios';

export function setContacts (data) {
  return {type: 'SET_CONTACTS', contacts: data};
}

export function setContact (data) {
  return {type: 'SET_CONTACT', contact: data};
}

export function setDeleteId (data) {
  return {type: 'SET_DELETE_ID', deleteId: data};
}

export const fetchContacts = () => (dispatch, getState) => {
  axios({
    url: 'contact',
    method: 'GET',
  })
    .then(res => {
      // console.log(res.data.data);
      return dispatch(setContacts(res.data.data));
    })
    .catch(err => {
      console.log(err);
      // return dispatch(setError(err));
    })
}

export const fetchContact = (id) => (dispatch, getState) => {
  axios({
    url: `contact/${id}`,
    method: 'GET',
  })
    .then(res => {
      console.log(res.data.data);
      return dispatch(setContact(res.data.data));
    })
    .catch(err => {
      console.log(err);
      // return dispatch(setError(err));
    })
}

export const deleteContact = (id) => (dispatch, getState) => {
  axios({
    url: `contact/${id}`,
    method: 'DELETE',
  })
    .then(res => {
      console.log(res.data, 'ini data');
      return fetchContacts();
    })
    .catch(err => {
      console.log(err, 'ini error');
      // return dispatch(setError(err));
    })
}

export const createContact = (data) => (dispatch, getState) => {
  axios({
    url: 'contact',
    method: 'POST',
    data: data,
  })
    .then(res => {
      console.log(res.data);
      return fetchContacts();
    })
    .catch(err => {
      console.log(err);
      // return dispatch(setError(err));
    })
}

export const updateContact = (data, id) => (dispatch, getState) => {
  axios({
    url: `contact/${id}`,
    method: 'PUT',
    data: data,
  })
    .then(res => {
      console.log(res.data.data);
      return fetchContacts();
    })
    .catch(err => {
      console.log(err);
      // return dispatch(setError(err));
    })
}

