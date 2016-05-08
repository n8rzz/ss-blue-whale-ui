/**
 * @property VALID_CLIENT_CREATION_REQUEST
 * @type {ClientContactCreationType|Object}
 */
export const VALID_CLIENT_CONTACT_CREATION_REQUEST = {
    'position': 'The Boss',
    'name': 'Jenny Doe',
    'businessPhone': '555-867-5309',
    'mobilePhone': '555-867-5309',
    'email': 'jenny_doe@example.com'
};

/**
 * @property VALID_CLIENT_CONTACT_API_RESPONSE
 * @type {Array}
 */
export const VALID_CLIENT_CONTACT_API_RESPONSE = {
    'id': 2,
    'position': 'The Boss',
    'name': 'Jenny Doe',
    'businessPhone': '555-867-5309',
    'mobilePhone': '555-867-5309',
    'email': 'jenny_doe@example.com'
};

/**
 * @property VALID_CLIENT_CONTACT_REQUEST
 * @type {ClientContactType|Object}
 */
export const VALID_CLIENT_CONTACT_REQUEST = VALID_CLIENT_CONTACT_API_RESPONSE;

/**
 * @property VALID_CLIENT_CONTACT_LIST_API_RESPONSE
 * @type {ClientContactListType|Object}
 */
export const VALID_CLIENT_CONTACT_LIST_API_RESPONSE = [
    ...VALID_CLIENT_CONTACT_API_RESPONSE,
    {
        'id': 3,
        'position': 'The Boss',
        'name': 'Jenny Doe',
        'businessPhone': '555-867-5309',
        'mobilePhone': null,
        'email': 'jenny_doe@example.com'
    }
];
