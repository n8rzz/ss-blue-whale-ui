/**
 * VALID_CLIENT_CREATION_REQUEST
 *
 * @property VALID_SINGLE_CLIENT_API_RESPONSE
 * @type {ClientType|Object}
 */

export const VALID_CLIENT_CREATION_REQUEST = {
    'name': 'Closets, Closets, Closets, Closets'
};

/**
 * A valid client response from the api
 *
 * @property VALID_SINGLE_CLIENT_API_RESPONSE
 * @type {ClientType|Object}
 */
export const VALID_SINGLE_CLIENT_API_RESPONSE = {
    'id': 1,
    'name': 'Leonie Kling',
    'address_1': '745 Wiza Gardens',
    'address_2': 'Suite 877',
    'city': 'Gislasonton',
    'state': 'OH',
    'zip': '34243',
    'fax': '347-779-6304 x60554',
    'phone': '693.408.9026',
    'email': 'juston@willms.org',
    'website': 'orn.name',
    'entity': 'Individual',
    'joinDate': '2013-04-29T04:37:14.729Z',
    'status': 'Active',
    'client_contacts': [
        {
            'id': 3,
            'position': 'The Boss',
            'name': 'Jenny Doe',
            'businessPhone': '555-867-5309',
            'mobilePhone': null,
            'email': 'jenny_doe@example.com'
        }
    ],
    'notes': [
        {
            'id': 8,
            'content': 'Grooving slowly',
            'notable_id': 1,
            'created_at': '2016-05-02T02:41:50.979Z'
        },
        {
            'id': 7,
            'content': 'Long Before These Crowded Streets, here stood my Dreaming Tree.',
            'notable_id': 1,
            'created_at': '2016-05-02T00:17:51.812Z'
        }
    ]
};

/**
 * @property VALID_CLIENT_REQUEST
 * @type {ClientPreviewType|Object}
 */
export const VALID_CLIENT_REQUEST = {
    'id': 1,
    'name': 'Jim Bob\'s Auto & Detailing',
    'address_1': null,
    'address_2': null,
    'city': null,
    'state': null,
    'zip': null,
    'fax': null,
    'phone': null,
    'email': null,
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
        'address_1': null,
        'address_2': null,
        'city': null,
        'state': null,
        'zip': null,
        'fax': null,
        'phone': null,
        'email': null,
        'website': null
    },
    {
        'id': 2,
        'name': 'Closets, Closets, Closets, Closets',
        'address_1': '123 Wallaby Way',
        'address_2': null,
        'city': 'Sydney',
        'state': 'Tx',
        'zip': '77432',
        'fax': '555-867-5310',
        'phone': '555-867-5309',
        'email': 'c4@example.com',
        'website': 'http://www.closetsallover.com'
    }
];
