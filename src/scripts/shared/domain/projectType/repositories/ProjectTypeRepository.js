import request from 'axios';
import { ProjectTypeListType } from '../types/ProjectTypeTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/projectTypes`;

export default {
    getProjectTypeList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ProjectTypeListType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
