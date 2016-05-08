import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    GET_CLIENT_LIST_START,
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL,
    getClientList
} from '../../../../../src/scripts/shared/domain/client/actions/ClientListActions';

import ClientRepository from '../../../../../src/scripts/shared/domain/client/repositories/ClientRepository';

import { ValidClientList } from '../../../../specHelper/fixtures/client/ClientTypes';

ava('getClientList dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.getClientList = sinon.stub().resolves();
    await getClientList()(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: GET_CLIENT_LIST_START }));
});

ava('getClientList calls the Client repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.getClientList = sinon.stub().resolves(ValidClientList);
    await getClientList()(dispatchSpy);

    t.ok(ClientRepository.getClientList.called);
});

ava('getClientList dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.getClientList = sinon.stub().resolves(ValidClientList);
    await getClientList()(dispatchSpy);

    t.ok(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.type === GET_CLIENT_LIST_SUCCESS);
    t.ok(objectPassedToSecondDispatch.payload === ValidClientList);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('getClientList dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.getClientList = sinon.stub().rejects(errorToThrow);

    try {
        await getClientList()(dispatchSpy);
    } catch (e) {
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === GET_CLIENT_LIST_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
