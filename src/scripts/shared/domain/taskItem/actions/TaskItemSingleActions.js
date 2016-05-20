import { push } from 'react-router-redux';
import TaskItemRepository from '../repositories/TaskItemRepository';
import {
    TaskItemCreationType,
    TaskItemType
} from '../types/TaskItemTypes';

// export const CREATE_TASK_ITEM_START = 'CREATE_TASK_ITEM_START';
// export const CREATE_TASK_ITEM_SUCCESS = 'CREATE_TASK_ITEM_SUCCESS';
// export const CREATE_TASK_ITEM_FAIL = 'CREATE_TASK_ITEM_FAIL';
//
// const createTaskItemStart = () => ({
//     type: CREATE_TASK_ITEM_START
// });
//
// const createTaskItemSuccess = payload => ({
//     type: CREATE_TASK_ITEM_SUCCESS,
//     payload: payload
// });
//
// const createTaskItemError = errors => ({
//     type: CREATE_TASK_ITEM_SUCCESS,
//     payload: null,
//     errors
// });
//
// /**
//  * @function createTaskItem
//  * @param {TaskItemCreationType|Object} taskItemFormValues
//  * @return {Function}
//  */
// export const createTaskItem = taskItemFormValues => {
//     if (!TaskItemCreationType.is(taskItemFormValues)) {
//         throw new TypeError('Invalid TaskItem type. Form values must be a TaskItemCreationType');
//     }
//
//     return dispatch => {
//         dispatch(createTaskItemStart());
//
//         return TaskItemRepository.createTaskItem(taskItemFormValues)
//             .then(response => {
//                 dispatch(createTaskItemSuccess(response));
//                 return dispatch(push('/clients'));
//             })
//             .catch(error => dispatch(createTaskItemError(error)));
//     };
// };

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
