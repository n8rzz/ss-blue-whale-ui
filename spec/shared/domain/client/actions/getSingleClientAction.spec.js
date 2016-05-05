import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import {
    GET_SINGLE_CLIENT_START,
    GET_SINGLE_CLIENT_SUCCESS,
    GET_SINGLE_CLIENT_FAIL,
    getSingleClient
} from '../../../../../src/scripts/shared/domain/client/actions/ClientSingleActions';
import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';
import { ValidClientType } from '../../../../specHelper/fixtures/client/ClientTypes';

ava('getSingleClient throws if data is not `ClientType`', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.getSingleClient = sinon.stub().resolves();
    try {
        await getSingleClient('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: GET_SINGLE_CLIENT_START }));
    }
});

ava('getSingleClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.getSingleClient = sinon.stub().resolves();
    await getSingleClient(ValidClientType.id)(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: GET_SINGLE_CLIENT_START }));
});

ava('getSingleClient calls the hierarchies repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.getSingleClient = sinon.stub().resolves(ValidClientType);
    await getSingleClient(ValidClientType.id)(dispatchSpy);

    t.ok(ClientRepository.getSingleClient.called);
});

ava('getSingleClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.getSingleClient = sinon.stub().resolves(ValidClientType);
    await getSingleClient(ValidClientType.id)(dispatchSpy);

    t.ok(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.type === GET_SINGLE_CLIENT_SUCCESS);
    t.ok(objectPassedToSecondDispatch.payload === ValidClientType);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('getSingleClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.getSingleClient = sinon.stub().rejects(errorToThrow);

    try {
        await getSingleClient(ValidClientType.id)(dispatchSpy);
    } catch (e) {
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === GET_SINGLE_CLIENT_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
