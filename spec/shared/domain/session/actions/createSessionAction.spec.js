import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_SESSION_START,
    CREATE_SESSION_SUCCESS,
    CREATE_SESSION_FAIL,
    createSession
} from '../../../../../src/scripts/shared/domain/session/actions/SessionActions';

import SessionRepository from '../../../../../src/scripts/shared/domain/session/repositories/SessionRepository';

import { ValidSessionRequestType } from '../../../../specHelper/fixtures/session/SessionFixutes';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

ava('createSession throws if data is not `SessionRequestType`', async t => {
    const dispatchSpy = sinon.spy();
    SessionRepository.createSession = sinon.stub().resolves();
    try {
        await createSession('');
    } catch (error) {
        t.falsy(dispatchSpy.calledWith({ type: CREATE_SESSION_START }));
    }
});

ava('createSession dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    SessionRepository.createSession = sinon.stub().resolves();
    await createSession(ValidSessionRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_SESSION_START }));
});

ava('createSession calls the Registration repository', async t => {
    const dispatchSpy = sinon.spy();
    SessionRepository.createSession = sinon.stub().resolves(ValidSessionRequestType);
    await createSession(ValidSessionRequestType)(dispatchSpy);

    t.truthy(SessionRepository.createSession.called);
});

ava('createSession dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    SessionRepository.createSession = sinon.stub().resolves(ValidSessionRequestType);
    await createSession(ValidSessionRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_SESSION_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidSessionRequestType);
});

ava('createSession dispatches react-router-redux `push` action that routes to `/clients` url', async t => {
    const dispatchSpy = sinon.spy();
    SessionRepository.createSession = sinon.stub().resolves(ValidSessionRequestType);
    await createSession(ValidSessionRequestType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/clients');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('createSession dispatches fail action when there is a failure', async t => {
    const errorToThrow = { data: {}, status: 123, statusText: 'Some Error Code' };
    const dispatchSpy = sinon.spy();

    SessionRepository.createSession = sinon.stub().rejects(errorToThrow);

    try {
        await createSession(ValidSessionRequestType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_SESSION_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
