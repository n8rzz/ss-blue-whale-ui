import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_CONTACT_FOR_CLIENT_START,
    CREATE_CONTACT_FOR_CLIENT_SUCCESS,
    CREATE_CONTACT_FOR_CLIENT_FAIL,
    createContactForClient
} from '../../../../../src/scripts/shared/domain/clientContact/actions/ClientContactSingleActions';
import ClientRepository from '../../../../../src/scripts/shared/domain/clientContact/repositories/ClientContactRepository';
import {
    ValidClientContactCreationType,
    ValidClientContactType
} from '../../../../specHelper/fixtures/clientContact/ClientContactFixtures';

const CLIENT_ID = 1;

ava('createContactForClient throws if data is not `ClientContactCreationType`', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createContactForClient = sinon.stub().resolves();
    try {
        await createContactForClient('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: CREATE_CONTACT_FOR_CLIENT_START }));
    }
});

ava('createContactForClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createContactForClient = sinon.stub().resolves(ValidClientContactType);
    await createContactForClient(CLIENT_ID, ValidClientContactCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_CONTACT_FOR_CLIENT_START }));
});

ava('createContactForClient calls the ClientContact repository', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createContactForClient = sinon.stub().resolves(ValidClientContactType);
    await createContactForClient(CLIENT_ID, ValidClientContactCreationType)(dispatchSpy);

    t.truthy(ClientRepository.createContactForClient.called);
});

ava('createContactForClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    ClientRepository.createContactForClient = sinon.stub().resolves(ValidClientContactType);
    await createContactForClient(CLIENT_ID, ValidClientContactCreationType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_CONTACT_FOR_CLIENT_SUCCESS);
    t.truthy(objectPassedToSecondDispatch.payload === ValidClientContactType);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('createContactForClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    ClientRepository.createContactForClient = sinon.stub().rejects(errorToThrow);

    try {
        await createContactForClient(CLIENT_ID, ValidClientContactCreationType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_CONTACT_FOR_CLIENT_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
