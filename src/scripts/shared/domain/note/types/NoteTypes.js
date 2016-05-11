import t from 'tcomb';

/**
 * @type NoteCreationRequestType
 * @return {NoteCreationRequestType}
 */
export const NoteCreationRequestType = t.struct({
    content: t.String
}, 'NoteCreationRequestType');

/**
 * @type {NoteType}
 * @return {NoteType}
 */
export const NoteType = NoteCreationRequestType.extend({
    id: t.Number,
    notable_id: t.Number,
    created_at: t.String
}, 'NoteType');
