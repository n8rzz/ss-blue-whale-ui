import { push } from 'react-router-redux';
import ClientRepository from '../repositories/ClientRepository';
import {
    ClientCreationType,
    ClientType
} from '../types/ClientTypes';

export const CREATE_CLIENT_START = 'CREATE_CLIENT_START';
export const CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS';
export const CREATE_CLIENT_FAIL = 'CREATE_CLIENT_FAIL';

const createClientStart = () => ({
    type: CREATE_CLIENT_START
});

const createClientSuccess = payload => ({
    type: CREATE_CLIENT_SUCCESS,
    payload: payload
});

const createClientError = errors => ({
    type: CREATE_CLIENT_SUCCESS,
    payload: null,
    errors
});

/**
 * @function createClient
 * @param {ClientCreationType|Object} clientFormValues
 * @return {Function}
 */
export const createClient = (clientFormValues) => {
    if (!ClientCreationType.is(clientFormValues)) {
        throw new TypeError('Invalid Client type. Form values must be a ClientCreateionType');
    }

    return dispatch => {
        dispatch(createClientStart());

        return ClientRepository.createClient(clientFormValues)
            .then(response => {
                dispatch(createClientSuccess(response));
                return dispatch(push('/clients'));
            })
            .catch(error => dispatch(createClientError(error)));
    };
};

export const SAVE_CLIENT_START = 'SAVE_CLIENT_START';
export const SAVE_CLIENT_SUCCESS = 'SAVE_CLIENT_SUCCESS';
export const SAVE_CLIENT_FAIL = 'SAVE_CLIENT_FAIL';

const saveClientStart = () => ({
    type: SAVE_CLIENT_START
});

const saveClientSuccess = payload => ({
    type: SAVE_CLIENT_SUCCESS,
    payload: payload
});

const saveClientError = errors => ({
    type: SAVE_CLIENT_SUCCESS,
    payload: null,
    errors
});

/**
 * @function saveClient
 * @param {Number} id
 * @param {ClientType|Object} clientFormValues
 * @return {Function}
 */
export const saveClient = (id, clientFormValues) => {
    if (!ClientType.is(clientFormValues)) {
        throw new TypeError('Invalid Client type. Form values must be a ClientType');
    }

    return dispatch => {
        dispatch(saveClientStart());

        return ClientRepository.saveClient(id, clientFormValues)
            .then(response => dispatch(saveClientSuccess(response)))
            .catch(error => dispatch(saveClientError(error)));
    };
};
