import ClientRepository from '../repositories/ClientRepository';
import { ClientCreationType } from '../types/ClientTypes';

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

export const createClient = (clientFormValues) => {
    if (!ClientCreationType.is(clientFormValues)) {
        throw new TypeError('Invalid Client type. Form values must be a ClientCreateionType');
    }

    return dispatch => {
        dispatch(createClientStart());

        return ClientRepository.createClient(clientFormValues)
            .then(response => dispatch(createClientSuccess(response)))
            .catch(error => dispatch(createClientError(error)));
    };
};
