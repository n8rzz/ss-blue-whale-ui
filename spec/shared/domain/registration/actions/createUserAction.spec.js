import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    createUser
} from '../../../../../src/scripts/shared/domain/registration/actions/RegistrationActions';

import RegistrationRepository from '../../../../../src/scripts/shared/domain/registration/repositories/RegistrationRepository';

import { ValidRegistrationRequestType } from '../../../../specHelper/fixtures/registration/RegistrationFixtures';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

ava('createUser throws if data is not `RegistrationRequestType`', async t => {
    const dispatchSpy = sinon.spy();
    RegistrationRepository.createUser = sinon.stub().resolves();
    try {
        await createUser('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: CREATE_USER_START }));
    }
});

ava('createUser dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    RegistrationRepository.createUser = sinon.stub().resolves();
    await createUser(ValidRegistrationRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_USER_START }));
});

ava('createUser calls the Registration repository', async t => {
    const dispatchSpy = sinon.spy();
    RegistrationRepository.createUser = sinon.stub().resolves(ValidRegistrationRequestType);
    await createUser(ValidRegistrationRequestType)(dispatchSpy);

    t.truthy(RegistrationRepository.createUser.called);
});

ava('createUser dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    RegistrationRepository.createUser = sinon.stub().resolves(ValidRegistrationRequestType);
    await createUser(ValidRegistrationRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_USER_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidRegistrationRequestType);
});

ava('createUser dispatches react-router-redux `push` action that routes to `/clients` url', async t => {
    const dispatchSpy = sinon.spy();
    RegistrationRepository.createUser = sinon.stub().resolves(ValidRegistrationRequestType);
    await createUser(ValidRegistrationRequestType)(dispatchSpy);

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

ava('createUser dispatches fail action when there is a failure', async t => {
    const errorToThrow = { data: {}, status: 123, statusText: 'Some Error Code' };
    const dispatchSpy = sinon.spy();

    RegistrationRepository.createUser = sinon.stub().rejects(errorToThrow);

    try {
        await createUser(ValidRegistrationRequestType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_USER_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
