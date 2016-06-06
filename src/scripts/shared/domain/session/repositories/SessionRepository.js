import request from 'axios';
import { SessionResponseType } from '../types/SessionTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/login`;

export default {
    /**
     * @function createSession
     * @param {SessionRequestType} sessionCreationRequest
     */
    createSession: sessionCreationRequest => {
        return request.post(`${ENDPOINT}`, sessionCreationRequest)
            .then(response => new SessionResponseType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
