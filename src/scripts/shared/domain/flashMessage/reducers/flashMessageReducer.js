import { createReducer } from 'redux-create-reducer';
import { FlashMessageStateType } from '../types/FlashMessageTypes';

import {
    FLASH_MESSAGE_SHOW,
    FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER,
    FLASH_MESSAGE_START_REMOVAL_TIMER,
    FLASH_MESSAGE_STOP_REMOVAL_TIMER,
    FLASH_MESSAGE_REMOVE
} from '../actions/FlashMessageActions';

/**
 * @property INITIAL_STATE
 * @type {FlashMessageStateType}
 * @final
 */
const INITIAL_STATE = new FlashMessageStateType({
    timerId: -1,
    payload: null
});

const mergeState = (state, updates) => FlashMessageStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [FLASH_MESSAGE_SHOW]: (state, { payload }) => mergeState(
        INITIAL_STATE,
        {
            payload
        }
    ),

    [FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER]: (state) => mergeState(
        state,
        INITIAL_STATE
    ),

    [FLASH_MESSAGE_START_REMOVAL_TIMER]: (state, { timerId }) => mergeState(
        state,
        {
            timerId
        }
    ),

    [FLASH_MESSAGE_STOP_REMOVAL_TIMER]: (state) => mergeState(
        state,
        {
            timerId: -1
        }
    ),

    [FLASH_MESSAGE_REMOVE]: (state) => mergeState(
        state,
        INITIAL_STATE
    )
});
