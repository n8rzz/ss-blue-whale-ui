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

    t.ok(dispatchSpy.calledWith({ type: DELETE_CLIENT_START }));
});

ava('deleteClient calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

    t.ok(ClientRepository.deleteClient.called);
});

ava('deleteClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

    t.ok(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.type === DELETE_CLIENT_SUCCESS);
});

ava('deleteClient dispatches react-router-redux `push` action that routes to `/clients` url', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.deleteClient = sinon.stub().resolves();
    await deleteClient(CLIENT_ID)(dispatchSpy);

    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.ok(objectPassedToSecondDispatch.type === ROUTER_HISTORY_METHOD);
    t.ok(objectPassedToSecondDispatch.payload.args[0] === '/clients');
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
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === DELETE_CLIENT_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
