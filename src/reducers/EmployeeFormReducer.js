import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            console.log('AuthReducer.js EMPLOYEE_UPDATE')
            // action.payload === {prop: 'name', value: 'Marek' }
            // uses ES6 [action.payload.prop] -> name or phone
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            console.log('AuthReducer.js EMPLOYEE_CREATE')
            return INITIAL_STATE;
        default:
            return state
    }
}
