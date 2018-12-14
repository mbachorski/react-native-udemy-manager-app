import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETED
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
        case EMPLOYEE_SAVE_SUCCESS:
            console.log('AuthReducer.js EMPLOYEE_SAVE_SUCCESS')
            // reset all attributes in the form
            return INITIAL_STATE;
        case EMPLOYEE_DELETED:
            console.log('AuthReducer.js EMPLOYEE_DELETED')
            // reset all attributes in the form
            return INITIAL_STATE;
        default:
            return state
    }
}
