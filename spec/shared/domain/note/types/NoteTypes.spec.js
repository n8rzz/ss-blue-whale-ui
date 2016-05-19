/* eslint-disable */
import ava from 'ava';

import {
    NoteCreationRequestType,
    NoteType
} from '../../../../../src/scripts/shared/domain/note/types/NoteTypes';

import {
    ValidNoteCreationRequestType,
    ValidNoteType
} from '../../../../specHelper/fixtures/note/NoteFixtures';

import {
    VALID_NOTE_CREATION_TYPE,
    VALID_NOTE_API_RESPONSE
} from '../../../../specHelper/mocks/note/noteMocks';

ava('NoteCreationRequestType', t => {
    t.throws(() => NoteCreationRequestType(''));
    t.notThrows(() => NoteCreationRequestType(VALID_NOTE_CREATION_TYPE));
    t.truthy(NoteCreationRequestType.is(ValidNoteCreationRequestType) === true);
});

ava('NoteType', t => {
    t.throws(() => NoteType(''));
    t.notThrows(() => NoteType(VALID_NOTE_API_RESPONSE));
    t.truthy(NoteType.is(ValidNoteType) === true);
});
