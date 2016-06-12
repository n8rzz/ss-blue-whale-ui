import {
    FlashMessageType,
    FlashMessageStateType
} from '../../../../src/scripts/shared/domain/flashMessage/types/FlashMessageTypes';

import {
    VALID_FLASH_MESSAGE_TYPE,
    VALID_FLASH_MESSAGE_STATE_TYPE
} from '../../mocks/flashMessage/FlashMessageMocks';

export const ValidFlashMessageType = new FlashMessageType(VALID_FLASH_MESSAGE_TYPE);

export const ValidFlashMessageStateType = new FlashMessageStateType(VALID_FLASH_MESSAGE_STATE_TYPE);
