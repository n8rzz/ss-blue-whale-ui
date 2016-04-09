import ClientRepository from '../repositories/ClientRepository';

export const GET_CLIENT_LIST_START = 'GET_CLIENT_LIST_START';
export const GET_CLIENT_LIST_SUCCESS = 'GET_CLIENT_LIST_SUCCESS';
export const GET_CLIENT_LIST_FAIL = 'GET_CLIENT_LIST_FAIL';

const getClientListStart = () => ({
    type: GET_CLIENT_LIST_START
});

const getClientListSuccess = payload => ({
    type: GET_CLIENT_LIST_SUCCESS,
    payload: payload
});

const getClientListError = errors => ({
    type: GET_CLIENT_LIST_SUCCESS,
    payload: null,
    errors
});

export const getClientList = () => {
    return dispatch => {
        dispatch(getClientListStart());

        return ClientRepository.getClientList()
            .then(response => dispatch(getClientListSuccess(response)))
            .catch(error => dispatch(getClientListError(error)));
    };
};
