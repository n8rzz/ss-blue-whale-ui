import faker from 'faker';
import { VALID_POSITIVE, VALID_UUID } from './BaseTypes';

export const VALID_BOOK = {
    id: VALID_UUID,
    title: faker.hacker.adjective(),
    pages: VALID_POSITIVE
};

export const INVALID_BOOK = {
    id: 123,
    title: faker.hacker.adjective(),
    pages: `${VALID_POSITIVE}`
};

export const VALID_BOOK_LIST = [
    VALID_BOOK,
    VALID_BOOK
];

export const INVALID_BOOK_LIST = [
    VALID_BOOK,
    INVALID_BOOK
];

export const VALID_BOOK_STATE = {
    isLoading: false,
    payload: VALID_BOOK,
    errors: null
};

export const INVALID_BOOK_STATE = {
    isLoading: false,
    payload: INVALID_BOOK,
    errors: null
};

export const VALID_BOOK_LIST_STATE = {
    isLoading: false,
    payload: VALID_BOOK_LIST,
    errors: null
};

export const INVALID_BOOK_LIST_STATE = {
    isLoading: false,
    payload: INVALID_BOOK_LIST,
    errors: null
};
