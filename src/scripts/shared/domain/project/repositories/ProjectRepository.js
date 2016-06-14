import request from 'axios';
import {
    ProjectListType
} from '../types/ProjectTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/projects`;

export default {
    /**
     * Get a list of all `Projects`
     *
     * @function getClientList
     * @return {ProjectListType}
     */
    getClientList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ProjectListType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
