/* eslint no-native-reassign: 0 */
import ava from 'ava';
import sinon from 'sinon';

import {
    FLASH_MESSAGE_STOP_REMOVAL_TIMER,
    stopFlashMessageRemovalTimer
} from '../../../../../src/scripts/shared/domain/flashMessage/actions/FlashMessageActions';

import { ValidFlashMessageStateType } from '../../../../specHelper/fixtures/flashMessage/FlashMessageFixtures';

ava('stopFlashMessageRemovalTimer dispatches FLASH_MESSAGE_STOP_REMOVAL_TIMER type', t => {
    const getStateStub = () => ({ flashMessage: ValidFlashMessageStateType });
    const dispatchSpy = sinon.spy();

    stopFlashMessageRemovalTimer()(dispatchSpy, getStateStub);
    const objectPassedToDispatch = dispatchSpy.getCall(0).args[0];

    t.truthy(objectPassedToDispatch.type === FLASH_MESSAGE_STOP_REMOVAL_TIMER);
});

ava('stopFlashMessageRemovalTimer does not dispatch action if timerId as equal to -1', t => {
    const dispatchSpy = sinon.spy();
    const getStateStub = () => ({
        flashMessage: {
            timerId: -1
        }
    });

    stopFlashMessageRemovalTimer()(dispatchSpy, getStateStub);

    t.truthy(dispatchSpy.callCount === 0);
});

ava('stopFlashMessageRemovalTimer calls clearTimeout exactly one time with the timerId', t => {
    const dispatchSpy = sinon.spy();
    const getStateStub = () => ({ flashMessage: ValidFlashMessageStateType });
    clearTimeout = sinon.stub();

    stopFlashMessageRemovalTimer()(dispatchSpy, getStateStub);

    t.truthy(clearTimeout.callCount === 1);
    t.truthy(clearTimeout.calledWithExactly(ValidFlashMessageStateType.timerId) === true);
});
