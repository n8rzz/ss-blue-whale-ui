/**
 * Valid Task Item Creation request
 *
 * @property VALID_TASK_ITEM_API_RESPONSE
 * @type {TaskItemCreationType|Object}
 */
export const VALID_TASK_ITEM_CREATION_REQUEST = {
    'name': 'Client Review',
    'description': 'Face to Face with client',
    'isControllable': true,
    'sortOrder': 0
};

/**
 * Valid Task Item api response
 *
 * @property VALID_TASK_ITEM_API_RESPONSE
 * @type {TaskItemType|Object}
 */
export const VALID_TASK_ITEM_API_RESPONSE = {
    'id': 2,
    'name': 'Client Review',
    'description': 'Face to Face with client',
    'isControllable': true,
    'sortOrder': 0,
    'startDate': '2016-04-07T03:34:34.000Z',
    'endDate': null,
    'project_type': []
};

/**
 * Valid Task Item list api response
 *
 * @property VALID_TASK_ITEM_LIST_API_RESPONSE
 * @type {TaskItemListType|Object}
 */
export const VALID_TASK_ITEM_LIST_API_RESPONSE = [
    {
        'id': 1,
        'name': 'E-File',
        'description': 'Submit E-File',
        'isControllable': true,
        'sortOrder': 1,
        'startDate': '2016-04-07T03:34:34.000Z',
        'endDate': null
    },
    VALID_TASK_ITEM_API_RESPONSE
];
