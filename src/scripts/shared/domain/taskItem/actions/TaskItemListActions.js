import TaskItemRepository from '../repositories/TaskItemRepository';

export const GET_TASK_ITEM_LIST_START = 'GET_TASK_ITEM_LIST_START';
export const GET_TASK_ITEM_LIST_SUCCESS = 'GET_TASK_ITEM_LIST_SUCCESS';
export const GET_TASK_ITEM_LIST_FAIL = 'GET_TASK_ITEM_LIST_FAIL';

const getTaskItemListStart = () => ({
    type: GET_TASK_ITEM_LIST_START
});

const getTaskItemListSuccess = payload => ({
    type: GET_TASK_ITEM_LIST_SUCCESS,
    payload: payload
});

const getTaskItemListError = errors => ({
    type: GET_TASK_ITEM_LIST_SUCCESS,
    payload: null,
    errors
});

export const getTaskItemList = () => {
    return dispatch => {
        dispatch(getTaskItemListStart());

        return TaskItemRepository.getTaskItemList()
            .then(response => dispatch(getTaskItemListSuccess(response)))
            .catch(error => dispatch(getTaskItemListError(error)));
    };
};
