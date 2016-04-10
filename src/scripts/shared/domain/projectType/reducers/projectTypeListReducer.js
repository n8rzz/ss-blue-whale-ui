import { createReducer } from 'redux-create-reducer';
import { ProjectTypeListStateType } from '../types/ProjectTypeTypes';

import {
    GET_PROJECT_TYPE_LIST_START,
    GET_PROJECT_TYPE_LIST_SUCCESS,
    GET_PROJECT_TYPE_LIST_FAIL
} from '../actions/ProjectTypeListActions';

const INITIAL_STATE = new ProjectTypeListStateType({
    isLoading: false,
    payload: [],
    errors: null
});

const mergeState = (state, updates) => ProjectTypeListStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_PROJECT_TYPE_LIST_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_PROJECT_TYPE_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [GET_PROJECT_TYPE_LIST_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
