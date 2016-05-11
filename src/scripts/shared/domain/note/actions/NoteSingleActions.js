import NoteRepository from '../repositories/NoteRepository';
import { getSingleClient } from '../../client/actions/ClientSingleActions';
import { NoteCreationRequestType } from '../types/NoteTypes';

export const CREATE_NOTE_START = 'CREATE_NOTE_START';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAIL = 'CREATE_NOTE_FAIL';

const createNoteForClientStart = () => ({
    type: CREATE_NOTE_START
});

const createNoteForClientSuccess = payload => ({
    type: CREATE_NOTE_SUCCESS,
    payload
});

const createNoteForClientFail = errors => ({
    type: CREATE_NOTE_FAIL,
    errors
});

export const createNoteForClient = (clientId, noteCreationRequest) => {
    if (!NoteCreationRequestType.is(noteCreationRequest)) {
        throw new TypeError('Invalid request type. Expected a NoteCreationRequestType.');
    }

    return dispatch => {
        dispatch(createNoteForClientStart());

        return NoteRepository.createNoteForClient(clientId, noteCreationRequest)
            .then(response => {
                dispatch(getSingleClient(clientId));
                return dispatch(createNoteForClientSuccess(response));
            })
            .catch(errors => dispatch(createNoteForClientFail(errors)));
    };
};
