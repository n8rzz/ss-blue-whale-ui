import request from 'axios';
import {
    ClientListType,
    ClientType
} from '../types/ClientTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/clients`;

export default {
    /**
     * Get a list of all `Clients`
     *
     * @function getClientList
     * @return {ClientListType}
     */
    getClientList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ClientListType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * Get a single `Client`
     *
     * @function getSingleClient
     * @param {Number} id  Client.id
     * @return {ClientType}
     */
    getSingleClient: id => {
        return request.get(`${ENDPOINT}/${id}`)
            .then(response => new ClientType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * Create a new `Client`
     *
     * @function createClient
     * @param {ClientCreationType} createClientRequest
     * @return {ClientType}
     */
    createClient: createClientRequest => {
        return request.post(`${ENDPOINT}`, createClientRequest)
            .then(response => new ClientType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * Update an existing `Client`
     *
     * @function saveClient
     * @param {Number} id  Client.id
     * @param {ClientRequestType} clientRequest
     * @return {ClientType}
     */
    saveClient: (id, clientRequest) => {
        return request.put(`${ENDPOINT}/${id}`, clientRequest)
            .then(response => new ClientType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * Delete a single `Client`
     *
     * @function deleteClient
     * @param {Number} id  Client.id
     */
    deleteClient: id => {
        return request.delete(`${ENDPOINT}/${id}`)
            .then(response => response)
            .catch(error => {
                throw error
            });
    }
};
