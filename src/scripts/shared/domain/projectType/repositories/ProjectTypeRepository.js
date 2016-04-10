import request from 'axios';
import { ProjectTypeListType } from '../types/ProjectTypeTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/project_types`;

export default {
    getProjectTypeList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new ProjectTypeListType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
