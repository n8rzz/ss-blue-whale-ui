import { createReducer } from 'redux-create-reducer';
import { TaskItemListStateType } from '../types/TaskItemTypes';

import {
    GET_TASK_ITEM_LIST_START,
    GET_TASK_ITEM_LIST_SUCCESS,
    GET_TASK_ITEM_LIST_FAIL
} from '../actions/TaskItemListActions';

const INITIAL_STATE = new TaskItemListStateType({
    isLoading: false,
    payload: [],
    errors: null
});

const mergeState = (state, updates) => TaskItemListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_TASK_ITEM_LIST_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_TASK_ITEM_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_TASK_ITEM_LIST_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
