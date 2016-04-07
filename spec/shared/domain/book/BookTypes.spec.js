/* eslint-disable new-cap*/
import ava from 'ava';
import Fixtures from '../../../specHelper/fixtures';

import {
    BookType,
    BookListType,
    BookStateType,
    BookListStateType
} from '../../../../src/scripts/shared/domain/book/BookTypes';

const {
    VALID_BOOK,
    INVALID_BOOK,
    VALID_BOOK_LIST,
    INVALID_BOOK_LIST,
    VALID_BOOK_STATE,
    INVALID_BOOK_STATE,
    VALID_BOOK_LIST_STATE,
    INVALID_BOOK_LIST_STATE
} = Fixtures.book;

ava('BookType accepts valid book data', test => {
    test.ok(BookType(VALID_BOOK));

    test.throws(() => BookType(INVALID_BOOK));
});

ava('BookListType accepts valid book list', test => {
    test.ok(BookListType(VALID_BOOK_LIST));

    test.throws(() => BookListType(INVALID_BOOK_LIST));
});

ava('BookStateType accepts a BookType as a payload', test => {
    test.ok(BookStateType(VALID_BOOK_STATE));

    test.throws(() => BookStateType(INVALID_BOOK_STATE));
});

ava('BookListStateType accepts a BookListType as a payload', test => {
    test.ok(BookListStateType(VALID_BOOK_LIST_STATE));

    test.throws(() => BookListStateType(INVALID_BOOK_LIST_STATE));
});
