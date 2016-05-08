import { createReducer } from 'redux-create-reducer';
import { ProjectTypeStateType } from '../types/ProjectTypeTypes';

import {
    CREATE_PROJECT_TYPE_START,
    CREATE_PROJECT_TYPE_SUCCESS,
    CREATE_PROJECT_TYPE_FAIL,

    GET_PROJECT_TYPE_START,
    GET_PROJECT_TYPE_SUCCESS,
    GET_PROJECT_TYPE_FAIL,

    SAVE_PROJECT_TYPE_START,
    SAVE_PROJECT_TYPE_SUCCESS,
    SAVE_PROJECT_TYPE_FAIL,

    REMOVE_PROJECT_TYPE_START,
    REMOVE_PROJECT_TYPE_SUCCESS,
    REMOVE_PROJECT_TYPE_FAIL
} from '../actions/ProjectTypeActions';

const INITIAL_STATE = new ProjectTypeStateType({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => ProjectTypeStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [CREATE_PROJECT_TYPE_START]: state => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [CREATE_PROJECT_TYPE_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [CREATE_PROJECT_TYPE_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [GET_PROJECT_TYPE_START]: state => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [GET_PROJECT_TYPE_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_PROJECT_TYPE_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [SAVE_PROJECT_TYPE_START]: state => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [SAVE_PROJECT_TYPE_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [SAVE_PROJECT_TYPE_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [REMOVE_PROJECT_TYPE_START]: state => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [REMOVE_PROJECT_TYPE_SUCCESS]: state => mergeState(
        state,
        {
            isLoading: false
        }
    ),

    [REMOVE_PROJECT_TYPE_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )

});
