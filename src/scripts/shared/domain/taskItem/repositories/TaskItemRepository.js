import request from 'axios';

import { TaskItemListType } from '../types/TaskItemTypes';

import { ENDPOINTS } from '../../endpoints';

const ENDPOINT = `${ENDPOINTS}/task_items`;

export default {
    getTaskItemList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => new TaskItemListType(response.data))
            .catch(error => {
                throw error;
            });
    }
};
