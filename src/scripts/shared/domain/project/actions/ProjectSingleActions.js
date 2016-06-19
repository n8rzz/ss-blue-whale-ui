import { showFlashMessageWithTimedRemoval } from '../../flashMessage/actions/FlashMessageActions';
import { MESSAGES } from '../../Messages'

import ProjectRepository from '../repositories/ProjectRepository';

import { ProjectCreationRequestType } from '../types/ProjectTypes';

export const CREATE_PROJECT_START = 'CREATE_PROJECT_START';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAIL = 'CREATE_PROJECT_FAIL';

const createProjectStart = () => ({
    type: CREATE_PROJECT_START
});

const createProjectSuccess = payload => ({
    type: CREATE_PROJECT_SUCCESS,
    payload: payload
});

const createProjectError = errors => ({
    type: CREATE_PROJECT_SUCCESS,
    errors
});

/**
 *
 * @function createProject
 * @param {Object} projectCreationRequest
 */
export const createProject = projectCreationRequest => {
    if (!ProjectCreationRequestType.is(projectCreationRequest)) {
        throw new TypeError(MESSAGES.PROJECT.ERROR.INVALID_PROJECT_CREATION_REQUEST_TYPE);
    }

    return dispatch => {
        dispatch(createProjectStart());

        return ProjectRepository.createProject(projectCreationRequest)
            .then(response => {
                dispatch(createProjectSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.PROJECT.SUCCESS.CREATE
                }));
            })
            .catch(error => dispatch(createProjectError(error)));
    };
};
