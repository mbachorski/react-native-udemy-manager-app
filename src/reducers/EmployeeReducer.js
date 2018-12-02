import {
    EMPLOYEES_FETCH_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            console.log('AuthReducer.js EMPLOYEES_FETCH_SUCCESS');
            console.log(action); // this is not array, this is object of objects with ids
            // it is useful for redux where i can change specific object and not the whole array (state must be diferent)
            return action.payload;
        default:
            return state
    }
}
