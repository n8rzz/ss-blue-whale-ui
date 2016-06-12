import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_CLIENT_START,
    CREATE_CLIENT_SUCCESS,
    CREATE_CLIENT_FAIL,
    createClient
} from '../../../../../src/scripts/shared/domain/client/actions/ClientSingleActions';

import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';

import { ValidClientCreationType } from '../../../../specHelper/fixtures/client/ClientTypes';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

ava('createClient throws if data is not `ClientCreateType`', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves();
    try {
        await createClient('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: CREATE_CLIENT_START }));
    }
});

ava('createClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves();
    await createClient(ValidClientCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_CLIENT_START }));
});

ava('createClient calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves(ValidClientCreationType);
    await createClient(ValidClientCreationType)(dispatchSpy);

    t.truthy(ClientRepository.createClient.called);
});

ava('createClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves(ValidClientCreationType);
    await createClient(ValidClientCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 4);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_CLIENT_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidClientCreationType);
});

ava('createClient dispatches showFlashMessageWithTimedRemoval', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves(ValidClientCreationType);
    await createClient(ValidClientCreationType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(typeof objectPassedToSecondDispatch === 'function');
});

ava('createClient dispatches react-router-redux `push` action that routes to `/clients` url', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves(ValidClientCreationType);
    await createClient(ValidClientCreationType)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(3).args[0];

    t.truthy(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.truthy(objectPassedToSecondDispatch.payload.args[0] === '/clients');
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('createClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.createClient = sinon.stub().rejects(errorToThrow);

    try {
        await createClient(ValidClientCreationType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_CLIENT_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
