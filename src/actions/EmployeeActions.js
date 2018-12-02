import {
    EMPLOYEE_UPDATE
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
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => Actions.employeeList());
            // could be .then(() => Actions.employeeList({type: 'reset'})); instead of popping scene
    }

    // return {
    //     type: EMPLOYEE_UPDATE,
    //     payload: {prop, value}
    // }
};
