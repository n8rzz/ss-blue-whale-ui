import ava from 'ava';
import nock from 'nock';

import Fixtures from '../../../specHelper/fixtures';

import BookRepository from '../../../../src/scripts/shared/domain/book/BookRepository';

ava('getBookList returns a BookListType', async test => {
    const getBookList = nock(global.NOCK_SCOPE)
        .get('/books')
        .reply(200, Fixtures.book.VALID_BOOK_LIST);

    const response = await BookRepository.getBookList();

    test.ok(getBookList.isDone());
    test.ok(response);
});

ava('getBookList completes request if there is a network error', async test => {
    const getBookList = nock(global.NOCK_SCOPE)
        .get('/books')
        .reply(500, 'Error');

    const error = await BookRepository.getBookList()
        .then(() => false)
        .catch(response => response.status === 500);

    test.ok(getBookList.isDone());
    test.ok(error);
});
