// import { push } from 'react-router-redux';
import ClientContactRepository from '../repositories/ClientContactRepository';
import {
    ClientContactCreationType,
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
