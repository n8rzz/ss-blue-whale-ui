/**
 * VALID_CLIENT_CREATION_REQUEST
 *
 * @property VALID_SINGLE_CLIENT_API_RESPONSE
 * @type {ClientType|Object}
 */

export const VALID_CLIENT_CREATION_REQUEST = {
    'name': 'Closets, Closets, Closets, Closets',
    'status': 'Active'
};

/**
 * A valid client response from the api
 *
 * @property VALID_SINGLE_CLIENT_API_RESPONSE
 * @type {ClientType|Object}
 */
export const VALID_SINGLE_CLIENT_API_RESPONSE = {
    'id': 9,
    'name': 'Closets, Closets, Closets, Closets',
    'address_1': null,
    'address_2': null,
    'city': null,
    'state': null,
    'zip': null,
    'fax': null,
    'phone': null,
    'email': null,
    'emailPrimary': null,
    'emailSecondary': null,
    'dbaName': null,
    'spouseName': null,
    'website': null,
    'entity': null,
    'joinDate': '2016-05-08T23:58:27.906Z',
    'status': 'Active',
    'client_contacts': [
        {
            'id': 7,
            'position': 'Sir',
            'name': 'Red Forman',
            'businessPhone': null,
            'mobilePhone': null,
            'email': null,
            'client_id': 9
        },
        {
            'id': 6,
            'position': 'His Royal Dudeness',
            'name': 'The Dude',
            'businessPhone': null,
            'mobilePhone': null,
            'email': null,
            'client_id': 9
        }
    ],
    'projects': [
        {
            'id': 2,
            'startDate': '2016-04-02',
            'completedDate': '2016-04-04',
            'dueDate': null,
            'project_type': {
                'id': 8,
                'name': 'Monthly Payroll',
                'description': 'Monthly Payroll',
                'dueDate': '2016-06-30',
                'task_items': []
            }
        }
    ],
    'notes': []
};

/**
 * @property VALID_CLIENT_REQUEST
 * @type {ClientPreviewType|Object}
 */
export const VALID_CLIENT_REQUEST = {
    'id': 1,
    'name': 'Jim Bob\'s Auto & Detailing',
    'status': 'Active',
    'address_1': null,
    'address_2': null,
    'city': null,
    'state': null,
    'zip': null,
    'fax': null,
    'phone': null,
    'email': null,
    'emailPrimary': null,
    'emailSecondary': null,
    'dbaName': null,
    'spouseName': null,
    'website': null
};

/**
 * A valid client list response from the api
 *
 * @property VALID_CLIENT_LIST_API_RESPONSE
 * @type {ClientListType|Array}
 */
export const VALID_CLIENT_LIST_API_RESPONSE = [
    {
        'id': 1,
        'name': 'Jim Bob\'s Auto & Detailing',
        'status': 'Active',
        'address_1': null,
        'address_2': null,
        'city': null,
        'state': null,
        'zip': null,
        'fax': null,
        'phone': null,
        'email': null,
        'emailPrimary': null,
        'emailSecondary': null,
        'dbaName': null,
        'spouseName': null,
        'website': null
    },
    {
        'id': 2,
        'name': 'Closets, Closets, Closets, Closets',
        'status': 'Active',
        'address_1': '123 Wallaby Way',
        'address_2': null,
        'city': 'Sydney',
        'state': 'TX',
        'zip': '77432',
        'fax': '555-867-5310',
        'phone': '555-867-5309',
        'email': 'c4@example.com',
        'emailPrimary': null,
        'emailSecondary': null,
        'dbaName': null,
        'spouseName': null,
        'website': 'http://www.closetsallover.com'
    }
];
