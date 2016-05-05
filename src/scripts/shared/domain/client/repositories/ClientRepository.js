import request from 'axios';
import {
    ClientListType,
    ClientType
} from '../types/ClientTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/clients`;

export default {
    getClientList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ClientListType(response.data))
            .catch(error => {
                throw error;
            });
    },

    createClient: (createClientRequest) => {
        return request.post(`${ENDPOINT}`, createClientRequest)
            .then(response => new ClientType(response.data))
            .catch(error => {
                throw error;
            });
    },

    saveClient: (id, clientRequest) => {
        console.log('saveClient: ', id, clientRequest);
        return request.post(`${ENDPOINT}/${id}`, clientRequest)
            .then(response => new ClientType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
