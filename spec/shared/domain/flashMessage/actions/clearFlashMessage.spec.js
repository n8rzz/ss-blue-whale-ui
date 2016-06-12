import ava from 'ava';

import {
    FLASH_MESSAGE_REMOVE,
    clearFlashMessage
} from '../../../../../src/scripts/shared/domain/flashMessage/actions/FlashMessageActions';

ava('clearFlashMessage dispatches FLASH_MESSAGE_REMOVE type', t => {
    const result = clearFlashMessage();

    t.truthy(result.type === FLASH_MESSAGE_REMOVE);
});
