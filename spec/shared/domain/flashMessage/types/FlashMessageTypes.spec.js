import ava from 'ava';

import {
    FlashMessageType,
    FlashMessageStateType
} from '../../../../../src/scripts/shared/domain/flashMessage/types/FlashMessageTypes';

import {
    VALID_FLASH_MESSAGE_TYPE,
    VALID_FLASH_MESSAGE_STATE_TYPE
} from '../../../../specHelper/mocks/flashMessage/FlashMessageMocks';

import {
    ValidFlashMessageType,
    ValidFlashMessageStateType
} from '../../../../specHelper/fixtures/flashMessage/FlashMessageFixtures';

ava('FlashMessageType', t => {
    t.notThrows(() => new FlashMessageType(VALID_FLASH_MESSAGE_TYPE));
    t.truthy(FlashMessageType.is(ValidFlashMessageType) === true);

    t.throws(() => new FlashMessageType(''));
});

ava('FlashMessageStateType', t => {
    t.notThrows(() => new FlashMessageStateType(VALID_FLASH_MESSAGE_STATE_TYPE));
    t.truthy(FlashMessageStateType.is(ValidFlashMessageStateType) === true);

    t.throws(() => new FlashMessageStateType(''));
});
