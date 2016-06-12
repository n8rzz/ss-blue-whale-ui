import { FlashMessageType } from '../types/FlashMessageTypes';

/**
 * @property DEFAULT_REMOVAL_DELAY
 * @type {number}
 * @default 8000
 * @final
 */
const DEFAULT_REMOVAL_DELAY = 8000;

/**
 * @property INVALID_TIMER_ID
 * @type {number}
 * @default -1
 * @final
 */
const INVALID_TIMER_ID = -1;

export const FLASH_MESSAGE_SHOW = 'FLASH_MESSAGE_SHOW';
export const FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER = 'FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER';
export const FLASH_MESSAGE_START_REMOVAL_TIMER = 'FLASH_MESSAGE_START_REMOVAL_TIMER';
export const FLASH_MESSAGE_STOP_REMOVAL_TIMER = 'FLASH_MESSAGE_STOP_REMOVAL_TIMER';
export const FLASH_MESSAGE_REMOVE = 'FLASH_MESSAGE_REMOVE';

/**
 * Show a flash message.
 *
 * This action could be used by itself to show a flash message. `clearFlashMessage` would also need to be
 * called in order to remove the flash message.
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
 * Stop a removal timer if one exists.
 *
 * @function stopFlashMessageRemovalTimer
 */
export const stopFlashMessageRemovalTimer = () => (dispatch, getState) => {
    const { flashMessage } = getState();

    if (flashMessage.timerId === INVALID_TIMER_ID) {
        return;
    }

    clearTimeout(flashMessage.timerId);
    dispatch({ type: FLASH_MESSAGE_STOP_REMOVAL_TIMER });
};

/**
 * Remove a flash message
 *
 * @function clearFlashMessage
 * @return {Object}
 */
export const clearFlashMessage = () => ({
    type: FLASH_MESSAGE_REMOVE
});


/**
 * Remove existing flash message after a set delay.
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
 * Show a FlashMessage and after a specified length of time, remove that message.
 *
 * This is a combination action that calls various other actions. Each of those actions could be called
 * individually if one needed more control over a flash message.
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
