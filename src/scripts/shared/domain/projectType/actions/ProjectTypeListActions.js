import ProjectTypeRepository from '../repositories/ProjectTypeRepository';

export const GET_PROJECT_TYPE_LIST_START = 'GET_PROJECT_TYPE_LIST_START';
export const GET_PROJECT_TYPE_LIST_SUCCESS = 'GET_PROJECT_TYPE_LIST_SUCCESS';
export const GET_PROJECT_TYPE_LIST_FAIL = 'GET_PROJECT_TYPE_LIST_FAIL';

const getProjectTypeListStart = () => ({
    type: GET_PROJECT_TYPE_LIST_START
});

const getProjectTypeListSuccess = payload => ({
    type: GET_PROJECT_TYPE_LIST_SUCCESS,
    payload: payload
});

const getProjectTypeListError = errors => ({
    type: GET_PROJECT_TYPE_LIST_SUCCESS,
    payload: null,
    errors
});

export const getProjectTypeList = () => {
    return dispatch => {
        dispatch(getProjectTypeListStart());

        return ProjectTypeRepository.getProjectTypeList()
            .then(response => dispatch(getProjectTypeListSuccess(response)))
            .catch(error => dispatch(getProjectTypeListError(error)));
    };
};
