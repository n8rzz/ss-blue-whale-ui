import request from 'axios';
import {
    ProjectTypeListType,
    ProjectTypeType
} from '../types/ProjectTypeTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/projectTypes`;

export default {
    /**
     * @function getProjectTypeList
     */
    getProjectTypeList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ProjectTypeListType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * @function createProjectType
     */
    createProjectType: createProjectTypeRequest => {
        return request.post(`${ENDPOINT}`, createProjectTypeRequest)
            .then(response => new ProjectTypeType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * @function getProjectType
     */
    getProjectType: id => {
        return request.get(`${ENDPOINT}/${id}`)
            .then(response => new ProjectTypeType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * @function saveProjectType
     */
    saveProjectType: (id, projectTypeRequest) => {
        return request.put(`${ENDPOINT}/${id}`, projectTypeRequest)
            .then(response => new ProjectTypeType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * @function removeProjectType
     */
    removeProjectType: id => {
        return request.delete(`${ENDPOINT}/${id}`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
