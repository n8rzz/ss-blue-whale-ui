import { createReducer } from 'redux-create-reducer';
import { TaskItemStateType } from '../types/TaskItemTypes';

import {
    CREATE_TASK_ITEM_START,
    CREATE_TASK_ITEM_SUCCESS,
    CREATE_TASK_ITEM_FAIL,

    GET_SINGLE_TASK_ITEM_START,
    GET_SINGLE_TASK_ITEM_SUCCESS,
    GET_SINGLE_TASK_ITEM_FAIL,

    SAVE_TASK_ITEM_START,
    SAVE_TASK_ITEM_SUCCESS,
    SAVE_TASK_ITEM_FAIL,

    DELETE_TASK_ITEM_START,
    DELETE_TASK_ITEM_SUCCESS,
    DELETE_TASK_ITEM_FAIL
} from '../actions/TaskItemSingleActions';

const INITIAL_STATE = new TaskItemStateType({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => TaskItemStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [CREATE_TASK_ITEM_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [CREATE_TASK_ITEM_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [CREATE_TASK_ITEM_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [GET_SINGLE_TASK_ITEM_START]: state => mergeState(
        state,
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
    ),

    [SAVE_TASK_ITEM_START]: state => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [SAVE_TASK_ITEM_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [SAVE_TASK_ITEM_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [DELETE_TASK_ITEM_START]: state => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [DELETE_TASK_ITEM_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [DELETE_TASK_ITEM_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),
});
