import faker from 'faker';

export const VALID_POSITIVE = 12345;
export const INVALID_POSITIVE = -345;

export const VALID_UUID = faker.random.uuid();
export const INVALID_UUID = faker.random.number();

export const VALID_ERROR_RESPONSE = {
    'data': {
        'password': [
            'is too short (minimum is 8 characters)'
        ]
    },
    'status': 400,
    'statusText': 'Bad Request',
    'headers': {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-cache'
    },
    'config': {
        'transformRequest': {},
        'transformResponse': {},
        'headers': {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8'
        },
        'timeout': 0,
        'xsrfCookieName': 'XSRF-TOKEN',
        'xsrfHeaderName': 'X-XSRF-TOKEN',
        'method': 'post',
        'url': 'http://localhost:3000/users',
        'data': '{\"email\":\"tommy@callahanauto.com\",\"username\":\"36niner\",\"password\":\"36niner\",\"password_confirmation\":\"36niner\"}'
    }
};


export const VALID_BASE_STATE_TYPE = {
    isLoading: true,
    errors: null
};

export const INVALID_BASE_STATE_TYPE = {
    isLoading: 'true',
    errors: false
};
