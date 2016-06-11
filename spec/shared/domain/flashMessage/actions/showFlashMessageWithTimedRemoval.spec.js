import ava from 'ava';
import sinon from 'sinon';

import {
    FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER,
    FLASH_MESSAGE_SHOW,
    FLASH_MESSAGE_START_REMOVAL_TIMER,
    showFlashMessageWithTimedRemoval
} from '../../../../../src/scripts/shared/domain/flashMessage/actions/timedRemovalFlashMessage';

import { VALID_FLASH_MESSAGE_TYPE } from '../../../../specHelper/mocks/flashMessage/FlashMessageMocks';

const DELAY_TIMER = 5000;

ava.serial('showFlashMessageWithTimedRemoval dispatches FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER type', t => {
    const dispatchSpy = sinon.spy();

    showFlashMessageWithTimedRemoval(VALID_FLASH_MESSAGE_TYPE, DELAY_TIMER)(dispatchSpy);
    const result = dispatchSpy.getCall(0).args[0];

    t.truthy(result.type === FLASH_MESSAGE_SHOW_WITH_REMOVAL_TIMER);
});

ava.serial('showFlashMessageWithTimedRemoval dispatches FLASH_MESSAGE_SHOW type', t => {
    const dispatchSpy = sinon.spy();

    showFlashMessageWithTimedRemoval(VALID_FLASH_MESSAGE_TYPE, DELAY_TIMER)(dispatchSpy);
    const result = dispatchSpy.getCall(1).args[0];

    t.truthy(result.type === FLASH_MESSAGE_SHOW);
});

ava.serial('showFlashMessageWithTimedRemoval calls dispatch thrice', t => {
    const dispatchSpy = sinon.spy();

    showFlashMessageWithTimedRemoval(VALID_FLASH_MESSAGE_TYPE, DELAY_TIMER)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
});
