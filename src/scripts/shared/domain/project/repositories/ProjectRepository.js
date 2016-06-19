import request from 'axios';

import {
    ProjectListType,
    ProjectType
} from '../types/ProjectTypes';

import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/projects`;

export default {
    /**
     * Get a list of all `Projects`
     *
     * @function getProjectList
     * @return {ProjectListType}
     */
    getProjectList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ProjectListType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * Create a new `Project`
     *
     * @function createProject
     * @param {ProjectCreationRequestType} projectCreationRequest
     * @return {ProjectType}
     */
    createProject: projectCreationRequest => {
        return request.post(`${ENDPOINT}`, projectCreationRequest)
            .then(response => new ProjectType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
