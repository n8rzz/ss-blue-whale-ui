import {
    VALID_NOTE_CREATION_TYPE,
    VALID_NOTE_API_RESPONSE
} from '../../mocks/note/noteMocks';

import {
    NoteCreationRequestType,
    NoteType
} from '../../../../src/scripts/shared/domain/note/types/NoteTypes';

export const ValidNoteCreationRequestType = new NoteCreationRequestType(VALID_NOTE_CREATION_TYPE);

export const ValidNoteType = new NoteType(VALID_NOTE_API_RESPONSE);
