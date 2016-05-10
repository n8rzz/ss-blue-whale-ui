import request from 'axios';
import {
    ClientContactType
} from '../types/ClientContactTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/clientContacts`;

export default {
    /**
     * @method createContactForClient
     * @param {ClientContactCreationType} clientContactRequest
     */
    createContactForClient: clientContactRequest => {
        return request.post(`${ENDPOINT}`, clientContactRequest)
            .then(response => new ClientContactType(response.data))
            .catch(error => {
                throw error;
            });
    },

    saveContactForClient: (clientContactId, clientContactRequest) => {
        return request.put(`${ENDPOINT}/${clientContactId}`, clientContactRequest)
            .then(response => new ClientContactType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
