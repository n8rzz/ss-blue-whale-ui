/**
 *
 * @property VALID_PROJECT_TYPE_CREATION_REQUEST
 * @type {ProjectTypeType}
 */
export const VALID_PROJECT_TYPE_CREATION_REQUEST = {
    'name': '1040',
    'description': 'Individual',
    'dueDate': null,
    'task_items': []
};


/**
 * Valid project type api response
 *
 * @property VALID_PROJECT_TYPE_API_RESPONSE
 * @type {Object|ProjectTypeType}
 */
export const VALID_PROJECT_TYPE_API_RESPONSE = {
    'id': 2,
    ...VALID_PROJECT_TYPE_CREATION_REQUEST
};

/**
 * Valid project type list api response
 *
 * @property VALID_PROJECT_TYPE_LIST_API_RESPONSE
 * @type {Object|ProjectTypeListType}
 */
export const VALID_PROJECT_TYPE_LIST_API_RESPONSE = [
    {
        'id': 1,
        'name': 'C-Crop',
        'description': 'C-Corp',
        'dueDate': null,
        'task_items': []
    },
    VALID_PROJECT_TYPE_API_RESPONSE
];
