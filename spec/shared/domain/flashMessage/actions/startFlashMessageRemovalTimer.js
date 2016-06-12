/* eslint no-native-reassign: 0 */
import ava from 'ava';
import sinon from 'sinon';

import {
    FLASH_MESSAGE_START_REMOVAL_TIMER,
    FLASH_MESSAGE_STOP_REMOVAL_TIMER,
    FLASH_MESSAGE_REMOVE,
    startFlashMessageRemovalTimer
} from '../../../../../src/scripts/shared/domain/flashMessage/actions/FlashMessageActions';

import { ValidFlashMessageStateType } from '../../../../specHelper/fixtures/flashMessage/FlashMessageFixtures';

const DELAY_IN_MS = 8000;

ava('startFlashMessageRemovalTimer calls setTimeout with a function as the first argument', t => {
    const dispatchSpy = sinon.spy();
    setTimeout = sinon.spy();

    startFlashMessageRemovalTimer(DELAY_IN_MS)(dispatchSpy);

    t.truthy(typeof setTimeout.args[0][0] === 'function');
});

ava('startFlashMessageRemovalTimer calls setTimeout with a default delay length', t => {
    const dispatchSpy = sinon.spy();
    setTimeout = sinon.spy();

    startFlashMessageRemovalTimer(DELAY_IN_MS)(dispatchSpy);

    t.truthy(setTimeout.args[0][1] === DELAY_IN_MS);
});

ava('startFlashMessageRemovalTimer calls setTimeout with a provided delay length', t => {
    const dispatchSpy = sinon.spy();
    setTimeout = sinon.spy();

    startFlashMessageRemovalTimer(500)(dispatchSpy);

    t.truthy(setTimeout.args[0][1] === 500);
});

ava('startFlashMessageRemovalTimer dispatches the correct type', t => {
    const dispatchSpy = sinon.spy();
    setTimeout = sinon.stub();

    startFlashMessageRemovalTimer(DELAY_IN_MS)(dispatchSpy);

    const objectPassedToDispatch = dispatchSpy.getCall(0).args[0];

    t.truthy(objectPassedToDispatch.type === FLASH_MESSAGE_START_REMOVAL_TIMER);
});

ava('startFlashMessageRemovalTimer dispatches the timerId with the timerId returned from setTimeout', t => {
    const INTERVAL_ID = 11;
    const dispatchSpy = sinon.spy();
    setTimeout = sinon.stub().returns(INTERVAL_ID);

    startFlashMessageRemovalTimer()(dispatchSpy);

    const objectPassedToDispatch = dispatchSpy.getCall(0).args[0];

    t.truthy(objectPassedToDispatch.timerId === INTERVAL_ID);
});

ava('startFlashMessageRemovalTimer dispatches FLASH_MESSAGE_START_REMOVAL_TIMER, FLASH_MESSAGE_STOP_REMOVAL_TIMER, FLASH_MESSAGE_REMOVE', async t => {
    const timerDelay = 10000;
    const getStateStub = () => ({ flashMessage: ValidFlashMessageStateType });
    const clock = sinon.useFakeTimers();
    const actionIndicies = [0, 1, 2];
    const possibleActions = [
        FLASH_MESSAGE_START_REMOVAL_TIMER,
        FLASH_MESSAGE_STOP_REMOVAL_TIMER,
        FLASH_MESSAGE_REMOVE
    ];

    t.plan(actionIndicies.length);

    let dispatchTriggerCount = 0;
    const dispatchStub = async (action) => {
        if (typeof action === 'function') {
            await action(dispatchStub, getStateStub);
            return;
        }

        const actionIndex = actionIndicies[dispatchTriggerCount];
        t.deepEqual(action.type, possibleActions[actionIndex]);

        dispatchTriggerCount++;
    };

    await startFlashMessageRemovalTimer()(dispatchStub);

    clock.tick(timerDelay);
    clock.restore();
});
