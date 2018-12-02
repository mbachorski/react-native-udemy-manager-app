import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from "./types";
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/auth';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    console.log(name, phone, shift)
    const {currentUser} = firebase.auth();

    // breaking the rules -> using redux thunk but not returning a function (dispatch). We just want to navigate nothing more
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE});
                Actions.employeeList({type: 'reset'});
            });
    }
};

// action creator
export const employeesFetch = () => {
    console.log('employeesFetch');
    const {currentUser} = firebase.auth();

    // breaking the rules -> using redux thunk but not returning a function (dispatch).
    // We just want to navigate nothing more
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        // this will work for whole app life, just call this once (listening for changes)
            .on('value', snapshot => { // object that describes what is in firebase
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()}); // here comes the data from snapshot.val()
            })
    }
};
