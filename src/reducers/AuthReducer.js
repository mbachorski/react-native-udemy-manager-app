import {EMAIL_CHANGED} from "../actions/types";

const INITIAL_STATE = {email: ''};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('AuthReducer.js EMAIL_CHANGED')
            // returned value will become state, it has to be immutable
            return {...state, email: action.payload};
        default:
            return state
    }
}
