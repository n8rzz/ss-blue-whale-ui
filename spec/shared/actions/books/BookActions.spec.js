import ava from 'ava';
import sinon from 'sinon';

import {
    GET_BOOK_LIST_START,
    GET_BOOK_LIST_SUCCESS,
    GET_BOOK_LIST_FAIL,
    getBookList
} from '../../../../src/scripts/shared/actions/books/BookActions';

import BookRepository from '../../../../src/scripts/shared/domain/book/BookRepository';

let dispatchSpy;
let getBookListInstance = getBookList();

ava.beforeEach(t => {
    dispatchSpy = sinon.spy();
    BookRepository.getBookList = sinon.stub().returns(Promise.resolve());
});

ava('getBookList dispatches GET_BOOK_LIST_START', t => {
    getBookListInstance(dispatchSpy);
    t.ok(dispatchSpy.calledWith({ type: GET_BOOK_LIST_START}));
});

ava('getBookList calls the repository', t => {
    getBookListInstance(dispatchSpy);
    t.ok(BookRepository.getBookList.called);
});
