import ava from 'ava';

import {
    FLASH_MESSAGE_SHOW,
    showFlashMessage
} from '../../../../../src/scripts/shared/domain/flashMessage/actions/timedRemovalFlashMessage';

import { ValidFlashMessageType } from '../../../../specHelper/fixtures/flashMessage/FlashMessageFixtures';

ava('showFlashMessage dispatches FLASH_MESSAGE_SHOW type', t => {
    const result = showFlashMessage(ValidFlashMessageType);

    t.truthy(result.type === FLASH_MESSAGE_SHOW);
});

ava('showFlashMessage dispatches a payload', t => {
    const result = showFlashMessage(ValidFlashMessageType);

    t.truthy(result.payload === ValidFlashMessageType);
});
