import {
    EMAIL_CHANGED,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('AuthReducer.js EMAIL_CHANGED')
            // returned value will become state, it has to be immutable
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            console.log('AuthReducer.js PASSWORD_CHANGED')
            return {...state, password: action.payload};
        case LOGIN_USER_START:
            console.log('AuthReducer.js LOGIN_USER_START')
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            console.log('AuthReducer.js LOGIN_USER_SUCCESS')
            return {...state, ...INITIAL_STATE, user: action.payload};
        // below is the same as above as it resets all variables except user
        // return {
        //     ...state,
        //     user: action.payload,
        //     error: '',
        //     loading: false,
        //     email: '', // reset email and password (useful when user navigates back after logging in
        //     password: ''
        // };
        case LOGIN_USER_FAIL:
            console.log('AuthReducer.js LOGIN_USER_FAIL')
            return {...state, error: 'Authentication Failed', loading: false}; // optionally password: ''
        default:
            return state
    }
}
