import ava from 'ava';
import nock from 'nock';

import { VALID_NOTE_CREATION_TYPE } from '../../../../specHelper/mocks/note/noteMocks';
import { VALID_CLIENT_CONTACT_API_RESPONSE } from '../../../../specHelper/mocks/note/noteMocks';
// import { NoteType } from '../../../../../src/scripts/shared/domain/note/types/NoteTypes';

import NoteRepository from '../../../../../src/scripts/shared/domain/note/repositories/NoteRepository';

ava('createNoteForClient completes a request', async t => {
    const createNoteForClient = nock(global.NOCK_SCOPE)
        .post('/notes', VALID_NOTE_CREATION_TYPE)
        .reply(200, VALID_CLIENT_CONTACT_API_RESPONSE);

    const response = await NoteRepository.createNoteForClient(VALID_NOTE_CREATION_TYPE);

    t.ok(createNoteForClient.isDone());
    t.ok(response);
});

ava('createNoteForClient completes request if there is a network error', async t => {
    const errorToThrow = new Error();
    const createNoteForClient = nock(global.NOCK_SCOPE)
        .post('/notes')
        .reply(500, errorToThrow);

    const error = await NoteRepository.createNoteForClient(VALID_NOTE_CREATION_TYPE)
        .then(() => false)
        .catch(response => response.status === 500);

    t.ok(createNoteForClient.isDone());
    t.ok(error);
});
