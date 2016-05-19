import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    CREATE_NOTE_START,
    CREATE_NOTE_SUCCESS,
    CREATE_NOTE_FAIL,
    createNoteForClient
} from '../../../../../src/scripts/shared/domain/note/actions/NoteSingleActions';

import NoteRepository from '../../../../../src/scripts/shared/domain/note/repositories/NoteRepository';

import {
    ValidNoteCreationRequestType,
    ValidNoteType
} from '../../../../specHelper/fixtures/note/NoteFixtures';

import { ValidClientType } from '../../../../specHelper/fixtures/client/ClientTypes';

const CLIENT_ID = 1;

ava('createNoteForClient throws if data is not `NoteCreationType`', async t => {
    const dispatchSpy = sinon.spy();
    NoteRepository.createNoteForClient = sinon.stub().resolves(ValidClientType);
    try {
        await createNoteForClient('');
    } catch (error) {
        t.notOk(dispatchSpy.calledWith({ type: CREATE_NOTE_START }));
    }
});

ava('createNoteForClient dispatches start action', async t => {
    const dispatchSpy = sinon.spy();
    NoteRepository.createNoteForClient = sinon.stub().resolves(ValidClientType);
    await createNoteForClient(CLIENT_ID, ValidNoteCreationRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.calledWith({ type: CREATE_NOTE_START }));
});

ava('createNoteForClient calls the Note repository', async t => {
    const dispatchSpy = sinon.spy();
    NoteRepository.createNoteForClient = sinon.stub().resolves(ValidClientType);
    await createNoteForClient(CLIENT_ID, ValidNoteCreationRequestType)(dispatchSpy);

    t.truthy(NoteRepository.createNoteForClient.called);
});

ava('createNoteForClient dispatches success action when data resolves successfully', async t => {
    const dispatchSpy = sinon.spy();
    NoteRepository.createNoteForClient = sinon.stub().resolves(ValidClientType);
    await createNoteForClient(CLIENT_ID, ValidNoteCreationRequestType)(dispatchSpy);

    t.truthy(dispatchSpy.callCount === 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(2).args[0];

    t.truthy(objectPassedToSecondDispatch.type === CREATE_NOTE_SUCCESS);
});

ava.before(() => {
    sinon.stub(global.console, 'error', ()=> {});
});

ava.after(() => {
    global.console.error.restore();
});

ava('createNoteForClient dispatches fail action when there is a failure', async t => {
    const errorToThrow = new Error();
    const dispatchSpy = sinon.spy();

    NoteRepository.createNoteForClient = sinon.stub().rejects(errorToThrow);

    try {
        await createNoteForClient(CLIENT_ID, ValidNoteCreationRequestType)(dispatchSpy);
    } catch (e) {
        t.truthy(dispatchSpy.callCount === 2);
        const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

        t.truthy(objectPassedToSecondDispatch.type === CREATE_NOTE_FAIL);
        t.truthy(objectPassedToSecondDispatch.payload === null);
        t.truthy(objectPassedToSecondDispatch.errors === errorToThrow);
    }
});
