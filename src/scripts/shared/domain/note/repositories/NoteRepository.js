import request from 'axios';
// import { NoteType } from '../types/NoteTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/notes`;

export default {
    /**
     * @method createNoteForClient
     * @param {Number} id
     * @param {NoteCreationRequestType} noteRequest
     */
    createNoteForClient: noteRequest => {
        return request.post(`${ENDPOINT}`, noteRequest)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
