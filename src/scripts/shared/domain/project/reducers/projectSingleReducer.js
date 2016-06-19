import { createReducer } from 'redux-create-reducer';
import { ProjectStateType } from '../types/ProjectTypes';

import {
    CREATE_PROJECT_START,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_FAIL
} from '../actions/ProjectSingleActions';

const INITIAL_STATE = new ProjectStateType({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => ProjectStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [CREATE_PROJECT_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [CREATE_PROJECT_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            errors: null,
            payload
        }
    ),

    [CREATE_PROJECT_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            payload: null,
            errors
        }
    )
});
