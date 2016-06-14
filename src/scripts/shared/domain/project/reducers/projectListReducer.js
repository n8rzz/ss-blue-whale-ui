import { createReducer } from 'redux-create-reducer';
import { ProjectListStateType } from '../types/ProjectTypes';

import {
    GET_PROJECT_LIST_START,
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL
} from '../actions/ProjectListActions';

const INITIAL_STATE = new ProjectListStateType({
    isLoading: false,
    payload: [],
    errors: null
});

const mergeState = (state, updates) => ProjectListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_PROJECT_LIST_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_PROJECT_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_PROJECT_LIST_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
