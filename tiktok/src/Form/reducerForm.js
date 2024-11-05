import {SET_USERNAME, SET_PASSWORD, ADD_FORM, DELETE_FORM} from './constantsForm';

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.payload };
        case SET_PASSWORD:
            return { ...state, password: action.payload };
        case ADD_FORM:
            return { 
                ...state, 
                formList: [...state.formList, { username: state.username, password: state.password }]
            };
        case DELETE_FORM:
            return { 
                ...state, 
                formList: state.formList.filter((_, index) => index !== action.payload)
            };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

export default reducer;
