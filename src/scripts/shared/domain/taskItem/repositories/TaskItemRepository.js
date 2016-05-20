import request from 'axios';
import {
    TaskItemListType,
    TaskItemType
} from '../types/TaskItemTypes';
import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/taskItems`;

export default {
    getTaskItemList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new TaskItemListType(response.data))
            .catch(error => {
                throw error;
            });
    },

    getSingleTaskItem: taskItemId => {
        return request.get(`${ENDPOINT}/${taskItemId}`)
            .then(response => new TaskItemType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
