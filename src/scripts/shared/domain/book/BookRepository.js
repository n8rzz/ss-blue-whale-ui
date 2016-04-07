import request from 'axios';
import { ENDPOINTS } from '../endpoints';

const ENDPOINT = `${ENDPOINTS}/books`;

export default {
    getBookList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
