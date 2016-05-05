import { createReducer } from 'redux-create-reducer';
import { ClientStateType } from '../types/ClientTypes';

import {
    CREATE_CLIENT_START,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_FAIL,

    SAVE_CLIENT_START,
    SAVE_CLIENT_SUCCESS,
    SAVE_CLIENT_FAIL,

    GET_SINGLE_CLIENT_START,
    GET_SINGLE_CLIENT_SUCCESS,
    GET_SINGLE_CLIENT_FAIL
} from '../actions/ClientSingleActions';

const INITIAL_STATE = new ClientStateType({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => ClientStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [CREATE_CLIENT_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [CREATE_CLIENT_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [CREATE_CLIENT_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [SAVE_CLIENT_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [SAVE_CLIENT_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [SAVE_CLIENT_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [GET_SINGLE_CLIENT_START]: (state) => mergeState(
        state,
        {
            isLoading: true
        }
    ),

    [GET_SINGLE_CLIENT_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_SINGLE_CLIENT_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
