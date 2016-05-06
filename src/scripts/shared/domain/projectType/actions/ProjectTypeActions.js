import { push } from 'react-router-redux';
import ProjectTypeRepository from '../repositories/ProjectTypeRepository';
import {
    ProjectTypeCreationType
} from '../types/ProjectTypeTypes';

export const CREATE_PROJECT_TYPE_START = 'CREATE_PROJECT_TYPE_START';
export const CREATE_PROJECT_TYPE_SUCCESS = 'CREATE_PROJECT_TYPE_SUCCESS';
export const CREATE_PROJECT_TYPE_FAIL = 'CREATE_PROJECT_TYPE_FAIL';

const createProjectTypeStart = () => ({
    type: CREATE_PROJECT_TYPE_START
});

const createProjectTypeSuccess = payload => ({
    type: CREATE_PROJECT_TYPE_SUCCESS,
    payload: payload
});

const createProjectTypeError = errors => ({
    type: CREATE_PROJECT_TYPE_SUCCESS,
    payload: null,
    errors
});

export const createProjectType = projectTypeFormValues => {
    if (!ProjectTypeCreationType.is(projectTypeFormValues)) {
        throw new TypeError('Invalid ProjectType. Form values must be a ProjectTypeCreationType');
    }

    return dispatch => {
        dispatch(createProjectTypeStart());

        return ProjectTypeRepository.createProjectType(projectTypeFormValues)
            .then(response => {
                dispatch(createProjectTypeSuccess(response));
                return dispatch(push('/projectTypes'));
            })
            .catch(error => dispatch(createProjectTypeError(error)));
    };
};
