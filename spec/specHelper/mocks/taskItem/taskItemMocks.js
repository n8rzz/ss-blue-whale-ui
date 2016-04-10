/**
 * Valid Task Item api response
 *
 * @property VALID_TASK_ITEM_API_RESPONSE
 * @type {Object|TaskItemType}
 */
export const VALID_TASK_ITEM_API_RESPONSE = {
    'id': 2,
    'name': 'Client Review',
    'description': 'Face to Face with client',
    'sortOrder': 0,
    'startDate': '2016-04-07T03:34:34.000Z',
    'endDate': null,
    'project_type': []
};

/**
 * Valid Task Item list api response
 *
 * @property VALID_TASK_ITEM_LIST_API_RESPONSE
 * @type {Object|TaskItemListType}
 */
export const VALID_TASK_ITEM_LIST_API_RESPONSE = [
    {
        'id': 1,
        'name': 'E-File',
        'description': 'Submit E-File',
        'sortOrder': 1,
        'startDate': '2016-04-07T03:34:34.000Z',
        'endDate': null
    },
    VALID_TASK_ITEM_API_RESPONSE
];
