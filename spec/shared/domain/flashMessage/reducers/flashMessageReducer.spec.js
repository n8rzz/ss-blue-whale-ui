import ava from 'ava';

import {
    FLASH_MESSAGE_SHOW,
    FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER,
    FLASH_MESSAGE_START_REMOVAL_TIMER,
    FLASH_MESSAGE_STOP_REMOVAL_TIMER,
    FLASH_MESSAGE_REMOVE
} from '../../../../../src/scripts/shared/domain/flashMessage/actions/FlashMessageActions';

import {
    FlashMessageType,
    FlashMessageStateType
} from '../../../../../src/scripts/shared/domain/flashMessage/types/FlashMessageTypes';

import reducer from '../../../../../src/scripts/shared/domain/flashMessage/reducers/flashMessageReducer';

import { ValidFlashMessageType } from '../../../../specHelper/fixtures/flashMessage/FlashMessageFixtures';

const INITIAL_STATE = new FlashMessageStateType({
    timerId: -1,
    payload: null
});

const CHANGED_STATE = new FlashMessageStateType({
    timerId: 22,
    payload: ValidFlashMessageType
});

ava('flashMessageReducer returns an INITIAL_STATE', t => {
    t.notThrows(() => {
        reducer(INITIAL_STATE, {});
    });

    const reducerState = reducer(INITIAL_STATE, {});

    t.truthy(reducerState.timerId === -1);
    t.truthy(reducerState.payload === null);
});

ava('flashMessageReducer responds to FLASH_MESSAGE_SHOW by setting a payload', t => {
    t.notThrows(() => {
        reducer(INITIAL_STATE, {
            type: FLASH_MESSAGE_SHOW,
            payload: ValidFlashMessageType
        });
    });

    const reducerState = reducer(INITIAL_STATE, {
        type: FLASH_MESSAGE_SHOW,
        payload: ValidFlashMessageType
    });

    t.truthy(reducerState.timerId === INITIAL_STATE.timerId);
    t.deepEqual(reducerState.payload, ValidFlashMessageType);
});

ava('flashMessageReducer responds to FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER by resetting to INITIAL_STATE', t => {
    t.notThrows(() => {
        reducer(CHANGED_STATE, {
            type: FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER
        });
    });

    const reducerState = reducer(CHANGED_STATE, {
        type: FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER
    });

    t.truthy(reducerState.timerId === -1);
    t.truthy(reducerState.payload === null);
});

ava('flashMessageReducer responds to FLASH_MESSAGE_START_REMOVAL_TIMER by setting a timerId', t => {
    const timerId = 32;

    t.notThrows(() => {
        reducer(INITIAL_STATE, {
            type: FLASH_MESSAGE_START_REMOVAL_TIMER,
            timerId
        });
    });

    const reducerState = reducer(INITIAL_STATE, {
        type: FLASH_MESSAGE_START_REMOVAL_TIMER,
        timerId
    });

    t.truthy(reducerState.timerId === timerId);
});

ava('flashMessageReducer responds to FLASH_MESSAGE_STOP_REMOVAL_TIMER by resetting the timerId to -1', t => {
    t.notThrows(() => {
        reducer(CHANGED_STATE, {
            type: FLASH_MESSAGE_STOP_REMOVAL_TIMER
        });
    });

    const reducerState = reducer(CHANGED_STATE, {
        type: FLASH_MESSAGE_STOP_REMOVAL_TIMER
    });

    t.truthy(reducerState.timerId === -1);
    t.truthy(reducerState.payload === CHANGED_STATE.payload);
});

ava('flashMessageReducer responds to FLASH_MESSAGE_REMOVE by returning the INITIAL_STATE', t => {
    t.notThrows(() => {
        reducer(CHANGED_STATE, {
            type: FLASH_MESSAGE_REMOVE
        });
    });

    const reducerState = reducer(CHANGED_STATE, {
        type: FLASH_MESSAGE_REMOVE
    });

    t.deepEqual(reducerState, INITIAL_STATE);
});
