import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    UNAUTHORIZED_SESSION,
    unauthorizedSession
} from '../../../../../src/scripts/shared/domain/session/actions/SessionActions';

import { ErrorType } from '../../../../../src/scripts/shared/domain/baseTypes/BaseTypes';

const errorToThrow = new ErrorType({
    data: {},
    status: 401,
    statusText: 'Unauthorized'
});

ava('unauthorizedSession throws with incorrect param', async t => {
    const dispatchSpy = sinon.spy();

    try {
        await unauthorizedSession()(dispatchSpy);
    } catch (error) {
        t.truthy(dispatchSpy.callCount === 0 );
    }
});


ava('unauthorizedSession dispatches the correct action', async t => {
    const dispatchSpy = sinon.spy();
    await unauthorizedSession(errorToThrow)(dispatchSpy);

    const internalDispatchCall = dispatchSpy.getCall(0).args[0];
    t.truthy(internalDispatchCall.type === UNAUTHORIZED_SESSION );
});

ava('unauthorizedSession sets errors as an `ErrorType`', async t => {
    const dispatchSpy = sinon.spy();
    await unauthorizedSession(errorToThrow)(dispatchSpy);

    const internalDispatchCall = dispatchSpy.getCall(0).args[0];
    t.truthy(ErrorType.is(internalDispatchCall.errors) === true);
});
