import ProjectRepository from '../repositories/ProjectRepository';

export const GET_PROJECT_LIST_START = 'GET_PROJECT_LIST_START';
export const GET_PROJECT_LIST_SUCCESS = 'GET_PROJECT_LIST_SUCCESS';
export const GET_PROJECT_LIST_FAIL = 'GET_PROJECT_LIST_FAIL';

const getProjectListStart = () => ({
    type: GET_PROJECT_LIST_START
});

const getProjectListSuccess = payload => ({
    type: GET_PROJECT_LIST_SUCCESS,
    payload: payload
});

const getProjectListError = errors => ({
    type: GET_PROJECT_LIST_SUCCESS,
    payload: null,
    errors
});

export const getProjectList = () => {
    return dispatch => {
        dispatch(getProjectListStart());

        return ProjectRepository.getProjectList()
            .then(response => dispatch(getProjectListSuccess(response)))
            .catch(error => dispatch(getProjectListError(error)));
    };
};
