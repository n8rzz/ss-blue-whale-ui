import { FlashMessageType } from '../types/FlashMessageTypes';

/**
 * @property DEFAULT_REMOVAL_DELAY
 * @type {number}
 * @default 8000
 * @final
 */
const DEFAULT_REMOVAL_DELAY = 8000;

/**
 * @property INVALID_INTERVAL_ID
 * @type {number}
 * @default -1
 * @final
 */
const INVALID_INTERVAL_ID = -1;

export const FLASH_MESSAGE_SHOW = 'FLASH_MESSAGE_SHOW';
export const FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER = 'FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER';
export const FLASH_MESSAGE_START_REMOVAL_TIMER = 'FLASH_MESSAGE_START_REMOVAL_TIMER';
export const FLASH_MESSAGE_STOP_REMOVAL_TIMER = 'FLASH_MESSAGE_STOP_REMOVAL_TIMER';
export const FLASH_MESSAGE_HIDE = 'FLASH_MESSAGE_HIDE';

/**
 *
 * @function showFlashMessage
 * @param {FlashMessageType} flashMessage
 * @return {Object}
 */
export const showFlashMessage = flashMessage => ({
    type: FLASH_MESSAGE_SHOW,
    payload: flashMessage
});

/**
 *
 * @function stopFlashMessageRemovalTimer
 */
export const stopFlashMessageRemovalTimer = () => (dispatch, getState) => {
    const { flashMessage } = getState();

    if (flashMessage.timerId === INVALID_INTERVAL_ID) {
        return;
    }

    clearTimeout(flashMessage.timerId);
    dispatch({ type: FLASH_MESSAGE_STOP_REMOVAL_TIMER });
};

/**
 *
 * @function clearFlashMessage
 * @return {O}
 */
export const clearFlashMessage = () => ({
    type: FLASH_MESSAGE_HIDE
});


/**
 *
 * @function startFlashMessageRemovalTimer
 */
export const startFlashMessageRemovalTimer = (delayTimer = DEFAULT_REMOVAL_DELAY) => dispatch => {
    const timerId = setTimeout(
        () => {
            dispatch(stopFlashMessageRemovalTimer());
            dispatch(clearFlashMessage());
        },
        delayTimer
    );

    dispatch({
        type: FLASH_MESSAGE_START_REMOVAL_TIMER,
        timerId
    });
};

/**
 *
 * @function showFlashMessageWithTimedRemoval
 * @param  {FlashMessageType} flashMessage
 * @param  {Number} delay
 */
export const showFlashMessageWithTimedRemoval = (flashMessage, delay = DEFAULT_REMOVAL_DELAY) => dispatch => {
    dispatch({ type: FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER });
    dispatch(showFlashMessage(new FlashMessageType(flashMessage)));
    dispatch(startFlashMessageRemovalTimer(delay));
};
