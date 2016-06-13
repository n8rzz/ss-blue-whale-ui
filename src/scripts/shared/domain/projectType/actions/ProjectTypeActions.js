import { push } from 'react-router-redux';

import { showFlashMessageWithTimedRemoval } from '../../flashMessage/actions/FlashMessageActions';
import { MESSAGES } from '../../Messages';

import ProjectTypeRepository from '../repositories/ProjectTypeRepository';
import {
    ProjectTypeCreationType,
    ProjectTypeType
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
        throw new TypeError(MESSAGES.PROJECT_TYPE.ERROR.INVALID_PROJECT_TYPE_CREATION_TYPE);
    }

    return dispatch => {
        dispatch(createProjectTypeStart());

        return ProjectTypeRepository.createProjectType(projectTypeFormValues)
            .then(response => {
                dispatch(createProjectTypeSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.PROJECT_TYPE.SUCCESS.CREATE
                }));
                return dispatch(push('/projectTypes'));
            })
            .catch(error => dispatch(createProjectTypeError(error)));
    };
};

export const GET_PROJECT_TYPE_START = 'GET_PROJECT_TYPE_START';
export const GET_PROJECT_TYPE_SUCCESS = 'GET_PROJECT_TYPE_SUCCESS';
export const GET_PROJECT_TYPE_FAIL = 'GET_PROJECT_TYPE_FAIL';

const getProjectTypeStart = () => ({
    type: GET_PROJECT_TYPE_START
});

const getProjectTypeSuccess = payload => ({
    type: GET_PROJECT_TYPE_SUCCESS,
    payload: payload
});

const getProjectTypeError = errors => ({
    type: GET_PROJECT_TYPE_SUCCESS,
    payload: null,
    errors
});

export const getProjectType = id => dispatch => {
    dispatch(getProjectTypeStart());

    return ProjectTypeRepository.getProjectType(id)
        .then(response => dispatch(getProjectTypeSuccess(response)))
        .catch(error => dispatch(getProjectTypeError(error)));
};

export const SAVE_PROJECT_TYPE_START = 'SAVE_PROJECT_TYPE_START';
export const SAVE_PROJECT_TYPE_SUCCESS = 'SAVE_PROJECT_TYPE_SUCCESS';
export const SAVE_PROJECT_TYPE_FAIL = 'SAVE_PROJECT_TYPE_FAIL';

const saveProjectTypeStart = () => ({
    type: SAVE_PROJECT_TYPE_START
});

const saveProjectTypeSuccess = payload => ({
    type: SAVE_PROJECT_TYPE_SUCCESS,
    payload: payload
});

const saveProjectTypeError = errors => ({
    type: SAVE_PROJECT_TYPE_SUCCESS,
    payload: null,
    errors
});

export const saveProjectType = (id, projectTypeFormValues) => {
    if (!ProjectTypeType.is(projectTypeFormValues)) {
        throw new TypeError(MESSAGES.PROJECT_TYPE.ERROR.INVALID_PROJECT_TYPE_TYPE);
    }

    return dispatch => {
        dispatch(saveProjectTypeStart());

        return ProjectTypeRepository.saveProjectType(id, projectTypeFormValues)
            .then(response => {
                dispatch(saveProjectTypeSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.PROJECT_TYPE.SUCCESS.SAVE
                }));
            })
            .catch(error => dispatch(saveProjectTypeError(error)));
    };
};

export const REMOVE_PROJECT_TYPE_START = 'REMOVE_PROJECT_TYPE_START';
export const REMOVE_PROJECT_TYPE_SUCCESS = 'REMOVE_PROJECT_TYPE_SUCCESS';
export const REMOVE_PROJECT_TYPE_FAIL = 'REMOVE_PROJECT_TYPE_FAIL';

const removeProjectTypeStart = () => ({
    type: REMOVE_PROJECT_TYPE_START
});

const removeProjectTypeSuccess = () => ({
    type: REMOVE_PROJECT_TYPE_SUCCESS,
    payload: null
});

const removeProjectTypeError = errors => ({
    type: REMOVE_PROJECT_TYPE_SUCCESS,
    payload: null,
    errors
});

export const removeProjectType = id => {
    return dispatch => {
        dispatch(removeProjectTypeStart());

        return ProjectTypeRepository.removeProjectType(id)
            .then(() => {
                dispatch(removeProjectTypeSuccess());
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.PROJECT_TYPE.SUCCESS.DELETE
                }));
                return dispatch(push('/projectTypes'));
            })
            .catch(error => dispatch(removeProjectTypeError(error)));
    };
};
