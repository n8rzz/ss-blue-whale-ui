import { push } from 'react-router-redux';

import { showFlashMessageWithTimedRemoval } from '../../flashMessage/actions/FlashMessageActions';
import { MESSAGES } from '../../Messages';
import { getProjectTypeList } from '../../projectType/actions/ProjectTypeListActions';

import ClientRepository from '../repositories/ClientRepository';
import {
    ClientCreationType,
    ClientPreviewType
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
export const createClient = clientFormValues => {
    if (!ClientCreationType.is(clientFormValues)) {
        throw new TypeError(MESSAGES.CLIENT.ERROR.INVALID_CLIENT_CREATION_TYPE);
    }

    return dispatch => {
        dispatch(createClientStart());

        return ClientRepository.createClient(clientFormValues)
            .then(response => {
                dispatch(createClientSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.CLIENT.SUCCESS.CREATE
                }));
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
    if (!ClientPreviewType.is(clientFormValues)) {
        throw new TypeError(MESSAGES.CLIENT.ERROR.INVALID_CLIENT_PREVIEW_TYPE);
    }

    return dispatch => {
        dispatch(saveClientStart());

        return ClientRepository.saveClient(id, clientFormValues)
            .then(response => {
                dispatch(saveClientSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.CLIENT.SUCCESS.SAVE
                }));
            })
            .catch(error => dispatch(saveClientError(error)));
    };
};

export const GET_SINGLE_CLIENT_START = 'GET_SINGLE_CLIENT_START';
export const GET_SINGLE_CLIENT_SUCCESS = 'GET_SINGLE_CLIENT_SUCCESS';
export const GET_SINGLE_CLIENT_FAIL = 'GET_SINGLE_CLIENT_FAIL';

const getSingleClientStart = () => ({
    type: GET_SINGLE_CLIENT_START
});

const getSingleClientSuccess = payload => ({
    type: GET_SINGLE_CLIENT_SUCCESS,
    payload: payload
});

const getSingleClientError = errors => ({
    type: GET_SINGLE_CLIENT_SUCCESS,
    payload: null,
    errors
});

/**
 * @function getSingleClient
 * @param {Number} id
 * @param {ClientType|Object} clientFormValues
 * @return {Function}
 */
export const getSingleClient = id => {
    return dispatch => {
        dispatch(getSingleClientStart());

        return ClientRepository.getSingleClient(id)
            .then(response => {
                dispatch(getSingleClientSuccess(response));
                return dispatch(getProjectTypeList());
            })
            .catch(error => {
                console.error(error);
                dispatch(getSingleClientError(error));
            });
    };
};

export const DELETE_CLIENT_START = 'DELETE_CLIENT_START';
export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
export const DELETE_CLIENT_FAIL = 'DELETE_CLIENT_FAIL';

const deleteClientStart = () => ({
    type: DELETE_CLIENT_START
});

const deleteClientSuccess = () => ({
    type: DELETE_CLIENT_SUCCESS
});

const deleteClientError = errors => ({
    type: DELETE_CLIENT_SUCCESS,
    payload: null,
    errors
});

/**
 * @function deleteClient
 * @param {ClientCreationType|Object} clientFormValues
 * @return {Function}
 */
export const deleteClient = id => {
    return dispatch => {
        dispatch(deleteClientStart());

        return ClientRepository.deleteClient(id)
            .then(response => {
                dispatch(deleteClientSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.CLIENT.SUCCESS.DELETE
                }));
                return dispatch(push('/clients'));
            })
            .catch(error => dispatch(deleteClientError(error)));
    };
};
