import { createReducer } from 'redux-create-reducer';
import { TaskItemStateType } from '../types/TaskItemTypes';

import {
    GET_SINGLE_TASK_ITEM_START,
    GET_SINGLE_TASK_ITEM_SUCCESS,
    GET_SINGLE_TASK_ITEM_FAIL
} from '../actions/TaskItemSingleActions';

const INITIAL_STATE = new TaskItemStateType({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => TaskItemStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_SINGLE_TASK_ITEM_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_SINGLE_TASK_ITEM_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_SINGLE_TASK_ITEM_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
