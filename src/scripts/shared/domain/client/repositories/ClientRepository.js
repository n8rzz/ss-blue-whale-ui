import request from 'axios';

import { ClientListType } from '../types/ClientTypes';

import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/clients`;

export default {
    getClientList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ClientListType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
