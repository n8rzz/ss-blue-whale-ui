import { createReducer } from 'redux-create-reducer';
import { ProjectTypeStateType } from '../types/ProjectTypeTypes';

import {
    CREATE_PROJECT_TYPE_START,
    CREATE_PROJECT_TYPE_SUCCESS,
    CREATE_PROJECT_TYPE_FAIL
} from '../actions/ProjectTypeActions';

const INITIAL_STATE = new ProjectTypeStateType({
    isLoading: false,
    payload: [],
    errors: null
});

const mergeState = (state, updates) => ProjectTypeStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [CREATE_PROJECT_TYPE_START]: () => mergeState(
        INITIAL_STATE,
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
    )
});
