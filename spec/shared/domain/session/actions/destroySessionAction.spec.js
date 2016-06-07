import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    DESTROY_SESSION_START,
    DESTROY_SESSION_SUCCESS,
    DESTROY_SESSION_FAIL,
    destroySession
} from '../../../../../src/scripts/shared/domain/session/actions/SessionActions';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

const getStateStub = () => ({
    session: {
        payload: {
            access_token: '12345'
        }
    }
});

ava('destroySession dispatches fail action if no token is found in the store', async t => {
    const dispatchSpy = sinon.spy();
    const getInvalidStateStub = () => ({
        session: {
            payload: {}
        }
    });

    await destroySession()(dispatchSpy, getInvalidStateStub);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(dispatchSpy.callCount === 3);
    t.truthy(objectPassedToSecondDispatch.type === DESTROY_SESSION_FAIL );
});

ava('destroySession react-router-redux `push` action that routes to `/login` url on error', async t => {
    const dispatchSpy = sinon.spy();
    const getInvalidStateStub = () => ({
        session: {
            payload: {}
        }
    });

    await destroySession()(dispatchSpy, getInvalidStateStub);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/login');
});

ava('destroySession dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    await destroySession()(dispatchSpy, getStateStub);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(dispatchSpy.callCount === 3);
    t.truthy(objectPassedToSecondDispatch.type === DESTROY_SESSION_SUCCESS);
});

ava('destroySession dispatches react-router-redux `push` action that routes to `/login` url on success', async t => {
    const dispatchSpy = sinon.spy();
    await destroySession()(dispatchSpy, getStateStub);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/login');
});
