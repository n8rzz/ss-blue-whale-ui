import request from 'axios';
import { RegistrationResponseType } from '../types/RegistrationTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/users`;

export default {
    /**
     * @function createUser
     * @param {RegistrationRequestType} registrationRequest
     */
    createUser: registrationRequest => {
        return request.post(`${ENDPOINT}`, registrationRequest)
            .then(response => new RegistrationResponseType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
