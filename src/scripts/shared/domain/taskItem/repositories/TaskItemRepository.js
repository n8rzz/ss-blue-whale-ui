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

    createTaskItem: taskItemCreationRequest => {
        return request.post(`${ENDPOINT}`, taskItemCreationRequest)
            .then(response => new TaskItemType(response.data))
            .catch(error => {
                throw error
            });
    },

    getSingleTaskItem: taskItemId => {
        return request.get(`${ENDPOINT}/${taskItemId}`)
            .then(response => new TaskItemType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * Update an existing `TaskItem`
     *
     * @function saveTaskItem
     * @param {Number} id  TaskItem.id
     * @param {TaskItemRequestType} taskItemRequest
     * @return {TaskItemType}
     */
    saveClient: (id, taskItemRequest) => {
        return request.put(`${ENDPOINT}/${id}`, taskItemRequest)
            .then(response => new TaskItemType(response.data))
            .catch(error => {
                throw error;
            });
    },

    /**
     * Delete a single `TaskItem`
     *
     * @function deleteTaskItem
     * @param {Number} id  TaskItem.id
     */
    deleteTaskItem: id => {
        return request.delete(`${ENDPOINT}/${id}`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
