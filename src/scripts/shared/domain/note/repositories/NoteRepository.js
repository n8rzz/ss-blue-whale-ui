import request from 'axios';
// import { NoteType } from '../types/NoteTypes';
import { ENDPOINTS } from '../../endpoints';

// const ENDPOINT = `${ENDPOINTS}/notes`;

export default {
    /**
     * @method createNoteForClient
     * @param {Number} id
     * @param {NoteCreationRequestType} noteRequest
     */
    createNoteForClient: (clientId, noteRequest) => {
        return request.post(`${ENDPOINTS}/clients/${clientId}/notes`, noteRequest)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
