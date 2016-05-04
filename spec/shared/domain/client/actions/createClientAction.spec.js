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

ava('createClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves();
    await createClient(ValidClientCreationType)(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: CREATE_CLIENT_START }));
});

ava('createClient calls the hierarchies repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves(ValidClientCreationType);
    await createClient(ValidClientCreationType)(dispatchSpy);

    t.ok(ClientRepository.createClient.called);
});

ava('createClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createClient = sinon.stub().resolves(ValidClientCreationType);
    await createClient(ValidClientCreationType)(dispatchSpy);

    t.ok(dispatchSpy.callCount === 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.ok(objectPassedToSecondDispatch.type === CREATE_CLIENT_SUCCESS);
    t.ok(objectPassedToSecondDispatch.payload === ValidClientCreationType);
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
        t.ok(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.ok(objectPassedToSecondDispatch.type === CREATE_CLIENT_FAIL);
        t.ok(objectPassedToSecondDispatch.payload === null);
        t.ok(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
