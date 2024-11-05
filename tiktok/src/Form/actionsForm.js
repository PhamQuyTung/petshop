import {SET_USERNAME, SET_PASSWORD, ADD_FORM, DELETE_FORM} from './constantsForm';

// Các hàm action
export const setUsername = (payload) => ({
    type: SET_USERNAME,
    payload
});

export const setPassword = (payload) => ({
    type: SET_PASSWORD,
    payload
});

export const addForm = () => ({
    type: ADD_FORM
});

export const deleteForm = (payload) => ({
    type: DELETE_FORM,
    payload
});