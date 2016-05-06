import request from 'axios';
import {
    ProjectTypeListType,
    ProjectTypeType
} from '../types/ProjectTypeTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/projectTypes`;

export default {
    getProjectTypeList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ProjectTypeListType(response.data))
            .catch(error => {
                throw error;
            });
    },

    createProjectType: createProjectTypeRequest => {
        return request.post(`${ENDPOINT}`, createProjectTypeRequest)
            .then(response => new ProjectTypeType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
