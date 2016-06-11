import ava from 'ava';

import {
    FLASH_MESSAGE_HIDE,
    clearFlashMessage
} from '../../../../../src/scripts/shared/domain/flashMessage/actions/timedRemovalFlashMessage';

ava('clearFlashMessage dispatches FLASH_MESSAGE_HIDE type', t => {
    const result = clearFlashMessage();

    t.truthy(result.type === FLASH_MESSAGE_HIDE);
});
