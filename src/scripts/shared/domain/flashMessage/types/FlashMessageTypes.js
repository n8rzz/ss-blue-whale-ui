import t from 'tcomb';

/**
 * @property FlashMessageTypeEnum
 * @return {FlashMessageTypeEnum}
 */
export const FlashMessageTypeEnum = t.enums({
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning'
}, 'FlashMessageTypeEnum');

/**
 * @property FlashMessageType
 * @return {FlashMessageType}
 */
export const FlashMessageType = t.struct({
    type: FlashMessageTypeEnum,
    content: t.String
}, 'FlashMessageType');

/**
 * @property FlashMessageStateType
 * @return {FlashMessageStateType}
 */
export const FlashMessageStateType = t.struct({
    timerId: t.Number,
    payload: FlashMessageType
}, 'FlashMessageStateType');
