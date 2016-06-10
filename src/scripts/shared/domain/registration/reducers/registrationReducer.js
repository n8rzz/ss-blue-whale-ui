import { createReducer } from 'redux-create-reducer';
import { RegistrationStateType } from '../types/RegistrationTypes';

import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
} from '../actions/RegistrationActions';

const INITIAL_STATE = new RegistrationStateType({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => RegistrationStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [CREATE_USER_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [CREATE_USER_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [CREATE_USER_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    // [GET_SINGLE_USER_START]: state => mergeState(
    //     state,
    //     {
    //         isLoading: true
    //     }
    // ),
    //
    // [GET_SINGLE_USER_SUCCESS]: (state, { payload }) => mergeState(
    //     state,
    //     {
    //         isLoading: false,
    //         payload
    //     }
    // ),
    //
    // [GET_SINGLE_USER_FAIL]: (state, { errors }) => mergeState(
    //     state,
    //     {
    //         isLoading: false,
    //         errors
    //     }
    // ),
    //
    // [SAVE_USER_START]: state => mergeState(
    //     state,
    //     {
    //         isLoading: true
    //     }
    // ),
    //
    // [SAVE_USER_SUCCESS]: (state, { payload }) => mergeState(
    //     state,
    //     {
    //         isLoading: false,
    //         payload
    //     }
    // ),
    //
    // [SAVE_USER_FAIL]: (state, { errors }) => mergeState(
    //     state,
    //     {
    //         isLoading: false,
    //         errors
    //     }
    // ),
    //
    // [DELETE_USER_START]: state => mergeState(
    //     state,
    //     {
    //         isLoading: true
    //     }
    // ),
    //
    // [DELETE_USER_SUCCESS]: (state, { payload }) => mergeState(
    //     state,
    //     {
    //         isLoading: false,
    //         payload
    //     }
    // ),
    //
    // [DELETE_USER_FAIL]: (state, { errors }) => mergeState(
    //     state,
    //     {
    //         isLoading: false,
    //         errors
    //     }
    // )
});
