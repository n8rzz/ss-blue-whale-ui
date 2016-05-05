/**
 * VALID_CLIENT_CREATION_REQUEST
 *
 * @property VALID_CLIENT_API_RESPONSE
 * @type {ClientType|Object}
 */

export const VALID_CLIENT_CREATION_REQUEST = {
    'name': 'Closets, Closets, Closets, Closets'
};

/**
 * A valid client response from the api
 *
 * @property VALID_CLIENT_API_RESPONSE
 * @type {Object|ClientType}
 */
export const VALID_CLIENT_API_RESPONSE = {
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
};

export const VALID_CLIENT_REQUEST = VALID_CLIENT_API_RESPONSE;

/**
 * A valid client list response from the api
 *
 * @property VALID_CLIENT_LIST_API_RESPONSE
 * @type {Array|ClientListType}
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
    VALID_CLIENT_API_RESPONSE
];
