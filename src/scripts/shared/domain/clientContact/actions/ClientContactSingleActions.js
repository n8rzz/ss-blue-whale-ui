// import { push } from 'react-router-redux';
import ClientContactRepository from '../repositories/ClientContactRepository';
import {
    ClientContactCreationType,
    ClientContactType
} from '../types/ClientContactTypes';

import { getSingleClient } from '../../client/actions/ClientSingleActions';

export const CREATE_CONTACT_FOR_CLIENT_START = 'CREATE_CONTACT_FOR_CLIENT_START';
export const CREATE_CONTACT_FOR_CLIENT_SUCCESS = 'CREATE_CONTACT_FOR_CLIENT_SUCCESS';
export const CREATE_CONTACT_FOR_CLIENT_FAIL = 'CREATE_CONTACT_FOR_CLIENT_FAIL';

const createContactForClientStart = () => ({
    type: CREATE_CONTACT_FOR_CLIENT_START
});

const createContactForClientSuccess = payload => ({
    type: CREATE_CONTACT_FOR_CLIENT_SUCCESS,
    payload: payload
});

const createContactForClientError = errors => ({
    type: CREATE_CONTACT_FOR_CLIENT_SUCCESS,
    payload: null,
    errors
});

/**
 * Create a new Client Contact then update the current Client store
 *
 * @function createContactForClient
 * @param {ClientContactCreationType|Object} clientContactFormValues
 * @return {Function}
 */
export const createContactForClient = (clientId, clientContactFormValues) => {
    if (!ClientContactCreationType.is(clientContactFormValues)) {
        throw new TypeError('Invalid Client type. Form values must be a ClientContactCreationType');
    }

    return dispatch => {
        dispatch(createContactForClientStart());

        return ClientContactRepository.createContactForClient(clientContactFormValues)
            .then(response => {
                dispatch(getSingleClient(clientId));
                return dispatch(createContactForClientSuccess(response));
            })
            .catch(error => dispatch(createContactForClientError(error)));
    };
};

export const SAVE_CONTACT_FOR_CLIENT_START = 'SAVE_CONTACT_FOR_CLIENT_START';
export const SAVE_CONTACT_FOR_CLIENT_SUCCESS = 'SAVE_CONTACT_FOR_CLIENT_SUCCESS';
export const SAVE_CONTACT_FOR_CLIENT_FAIL = 'SAVE_CONTACT_FOR_CLIENT_FAIL';

const saveContactForClientStart = () => ({
    type: SAVE_CONTACT_FOR_CLIENT_START
});

const saveContactForClientSuccess = payload => ({
    type: SAVE_CONTACT_FOR_CLIENT_SUCCESS,
    payload: payload
});

const saveContactForClientError = errors => ({
    type: SAVE_CONTACT_FOR_CLIENT_SUCCESS,
    payload: null,
    errors
});

/**
 * Update and existing Client Contact then update the current Client store
 *
 * @function saveContactForClient
 * @param {ClientContactType|Object} clientContactFormValues
 * @return {Function}
 */
export const saveContactForClient = (clientId, clientContactFormValues) => {
    const contactId = clientContactFormValues.id;

    if (!ClientContactType.is(clientContactFormValues)) {
        throw new TypeError('Invalid Client type. Form values must be a ClientContactType');
    }

    return dispatch => {
        dispatch(saveContactForClientStart());

        return ClientContactRepository.saveContactForClient(contactId, clientContactFormValues)
            .then(response => {
                dispatch(getSingleClient(clientId));
                return dispatch(saveContactForClientSuccess(response));
            })
            .catch(error => dispatch(saveContactForClientError(error)));
    };
};

export const DELETE_CONTACT_FOR_CLIENT_START = 'DELETE_CONTACT_FOR_CLIENT_START';
export const DELETE_CONTACT_FOR_CLIENT_SUCCESS = 'DELETE_CONTACT_FOR_CLIENT_SUCCESS';
export const DELETE_CONTACT_FOR_CLIENT_FAIL = 'DELETE_CONTACT_FOR_CLIENT_FAIL';

const deleteContactForClientStart = () => ({
    type: DELETE_CONTACT_FOR_CLIENT_START
});

const deleteContactForClientSuccess = () => ({
    type: DELETE_CONTACT_FOR_CLIENT_SUCCESS
});

const deleteContactForClientError = errors => ({
    type: DELETE_CONTACT_FOR_CLIENT_SUCCESS,
    payload: null,
    errors
});

/**
 * Delete and existing Client Contact then update the current Client store
 *
 * @function deleteContactForClient
 * @param {Number} clientId
 * @param {Number} clientContactId
 * @return {Function}
 */
export const deleteContactForClient = (clientId, clientContactId) => dispatch => {
    dispatch(deleteContactForClientStart());

    return ClientContactRepository.deleteContactForClient(clientContactId)
        .then(response => {
            dispatch(getSingleClient(clientId));
            return dispatch(deleteContactForClientSuccess(response));
        })
        .catch(error => dispatch(deleteContactForClientError(error)));
};
