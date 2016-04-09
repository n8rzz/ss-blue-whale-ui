import { createReducer } from 'redux-create-reducer';
import { ClientListStateType } from '../types/ClientTypes';

import {
    GET_CLIENT_LIST_START,
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL
} from '../actions/ClientListActions';

const INITIAL_STATE = new ClientListStateType({
    isLoading: false,
    payload: [],
    errors: null
});

const mergeState = (state, updates) => ClientListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_CLIENT_LIST_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_CLIENT_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_CLIENT_LIST_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
