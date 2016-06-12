import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    DELETE_CLIENT_START,
    DELETE_CLIENT_SUCCESS,
    DELETE_CLIENT_FAIL,
    deleteClient
} from '../../../../../src/scripts/shared/domain/client/actions/ClientSingleActions';
import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';
import { ValidClientType } from '../../../../specHelper/fixtures/client/ClientTypes';

const ROUTER_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

const CLIENT_ID = ValidClientType.id;

ava('deleteClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: DELETE_CLIENT_START }));
});

ava('deleteClient calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

    t.truthy(ClientRepository.deleteClient.called);
});

ava('deleteClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 4);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.truthy(objectPassedToSecondDispatch.type === DELETE_CLIENT_SUCCESS);
});

ava('deleteClient dispatches showFlashMessageWithTimedRemoval', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(typeof objectPassedToSecondDispatch === 'function');
});

ava('deleteClient dispatches react-router-redux `push` action that routes to `/clients` url', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

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

ava('deleteClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.deleteClient = sinon.stub().rejects(errorToThrow);

    try {
        await deleteClient(CLIENT_ID)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === DELETE_CLIENT_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
