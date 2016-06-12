import { push } from 'react-router-redux';

import { showFlashMessageWithTimedRemoval } from '../../flashMessage/actions/FlashMessageActions';
import { MESSAGES } from '../../Messages';

import TaskItemRepository from '../repositories/TaskItemRepository';
import {
    TaskItemCreationType,
    TaskItemType
} from '../types/TaskItemTypes';

export const CREATE_TASK_ITEM_START = 'CREATE_TASK_ITEM_START';
export const CREATE_TASK_ITEM_SUCCESS = 'CREATE_TASK_ITEM_SUCCESS';
export const CREATE_TASK_ITEM_FAIL = 'CREATE_TASK_ITEM_FAIL';

const createTaskItemStart = () => ({
    type: CREATE_TASK_ITEM_START
});

const createTaskItemSuccess = payload => ({
    type: CREATE_TASK_ITEM_SUCCESS,
    payload: payload
});

const createTaskItemError = errors => ({
    type: CREATE_TASK_ITEM_SUCCESS,
    payload: null,
    errors
});

/**
 * @function createTaskItem
 * @param {TaskItemCreationType|Object} taskItemFormValues
 * @return {Function}
 */
export const createTaskItem = taskItemFormValues => {
    if (!TaskItemCreationType.is(taskItemFormValues)) {
        throw new TypeError(MESSAGES.TASK_ITEM.ERROR.INVALID_TASK_ITEM_CREATION_TYPE);
    }

    return dispatch => {
        dispatch(createTaskItemStart());

        return TaskItemRepository.createTaskItem(taskItemFormValues)
            .then(response => {
                dispatch(createTaskItemSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.TASK_ITEM.SUCCESS.CREATE_SUCCESS
                }));
                return dispatch(push('/taskItems'));
            })
            .catch(error => dispatch(createTaskItemError(error)));
    };
};

export const GET_SINGLE_TASK_ITEM_START = 'GET_SINGLE_TASK_ITEM_START';
export const GET_SINGLE_TASK_ITEM_SUCCESS = 'GET_SINGLE_TASK_ITEM_SUCCESS';
export const GET_SINGLE_TASK_ITEM_FAIL = 'GET_SINGLE_TASK_ITEM_FAIL';

const getSingleTaskItemStart = () => ({
    type: GET_SINGLE_TASK_ITEM_START
});

const getSingleTaskItemSuccess = payload => ({
    type: GET_SINGLE_TASK_ITEM_SUCCESS,
    payload: payload
});

const getSingleTaskItemError = errors => ({
    type: GET_SINGLE_TASK_ITEM_SUCCESS,
    payload: null,
    errors
});

/**
 * @function getSingleTaskItem
 * @param {Number} taskItemId
 * @return {Function}
 */
export const getSingleTaskItem = taskItemId => {
    return dispatch => {
        dispatch(getSingleTaskItemStart());

        return TaskItemRepository.getSingleTaskItem(taskItemId)
            .then(response => dispatch(getSingleTaskItemSuccess(response)))
            .catch(error => {
                console.error(error);
                dispatch(getSingleTaskItemError(error));
            });
    };
};

export const SAVE_TASK_ITEM_START = 'SAVE_TASK_ITEM_START';
export const SAVE_TASK_ITEM_SUCCESS = 'SAVE_TASK_ITEM_SUCCESS';
export const SAVE_TASK_ITEM_FAIL = 'SAVE_TASK_ITEM_FAIL';

const saveTaskItemStart = () => ({
    type: SAVE_TASK_ITEM_START
});

const saveTaskItemSuccess = payload => ({
    type: SAVE_TASK_ITEM_SUCCESS,
    payload: payload
});

const saveTaskItemError = errors => ({
    type: SAVE_TASK_ITEM_SUCCESS,
    payload: null,
    errors
});

/**
 * @function saveTaskItem
 * @param {Number} id
 * @param {TaskItemType|Object} taskItemFormValues
 * @return {Function}
 */
export const saveTaskItem = (id, taskItemFormValues) => {
    if (!TaskItemType.is(taskItemFormValues)) {
        throw new TypeError(MESSAGES.TASK_ITEM.ERROR.INVALID_TASK_ITEM_TYPE);
    }

    return dispatch => {
        dispatch(saveTaskItemStart());

        return TaskItemRepository.saveTaskItem(id, taskItemFormValues)
            .then(response => dispatch(saveTaskItemSuccess(response)))
            .catch(error => dispatch(saveTaskItemError(error)));
    };
};

export const DELETE_TASK_ITEM_START = 'DELETE_TASK_ITEM_START';
export const DELETE_TASK_ITEM_SUCCESS = 'DELETE_TASK_ITEM_SUCCESS';
export const DELETE_TASK_ITEM_FAIL = 'DELETE_TASK_ITEM_FAIL';

const deleteTaskItemStart = () => ({
    type: DELETE_TASK_ITEM_START
});

const deleteTaskItemSuccess = () => ({
    type: DELETE_TASK_ITEM_SUCCESS
});

const deleteTaskItemError = errors => ({
    type: DELETE_TASK_ITEM_SUCCESS,
    payload: null,
    errors
});

/**
 * @function deleteTaskItem
 * @param {Number} id
 * @return {Function}
 */
export const deleteTaskItem = id => {
    return dispatch => {
        dispatch(deleteTaskItemStart());

        return TaskItemRepository.deleteTaskItem(id)
            .then(response => {
                dispatch(deleteTaskItemSuccess(response));
                dispatch(showFlashMessageWithTimedRemoval({
                    type: 'SUCCESS',
                    content: MESSAGES.TASK_ITEM.SUCCESS.DELETE_SUCCESS
                }));
                return dispatch(push('/taskItems'));
            })
            .catch(error => dispatch(deleteTaskItemError(error)));
    };
};
