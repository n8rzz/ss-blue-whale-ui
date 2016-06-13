import { push } from 'react-router-redux';
import RegistrationRepository from '../repositories/RegistrationRepository';
import { ErrorType } from '../../baseTypes/BaseTypes';
import {
    RegistrationRequestType
} from '../types/RegistrationTypes';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

const createUserStart = () => ({
    type: CREATE_USER_START
});

const createUserSuccess = payload => ({
    type: CREATE_USER_SUCCESS,
    payload: payload
});

const createUserError = errors => ({
    type: CREATE_USER_FAIL,
    payload: null,
    errors
});

/**
 * @function createUser
 * @param {RegistrationRequestType|Object} registrationFormValues
 * @return {Function}
 */
export const createUser = registrationFormValues => {
    if (!RegistrationRequestType.is(registrationFormValues)) {
        throw new TypeError('Invalid Registration type. Form values must be a RegistrationRequestType');
    }

    return dispatch => {
        dispatch(createUserStart());

        return RegistrationRepository.createUser(registrationFormValues)
            .then(response => {
                dispatch(createUserSuccess(response));
                return dispatch(push('/clients'));
            })
            .catch(error => dispatch(createUserError(new ErrorType(error))));
    };
};
