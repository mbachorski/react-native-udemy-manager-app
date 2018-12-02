import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from "./types";
import firebase from '@firebase/app';
import '@firebase/auth'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('loginUser.then, user from firebase: ' + user.user.email);
                loginUserSuccess(dispatch, user)
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};


const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL});
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_USER_SUCCESS, payload: user});
}
