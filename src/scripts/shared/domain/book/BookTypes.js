import t from 'tcomb';
import { Positive, UUID } from '../BaseTypes';

export const BookType = t.struct({
    id: UUID,
    title: t.String,
    pages: Positive
}, 'BookType');

export const BookListType = t.list(BookType, 'BookListType');

export const BookStateType = t.struct({
    isLoading: t.Boolean,
    payload: t.maybe(BookType),
    errors: t.maybe(t.Error)
}, 'BookStateType');

export const BookListStateType = t.struct({
    isLoading: t.Boolean,
    payload: t.maybe(BookListType),
    errors: t.maybe(t.Error)
}, 'BookListStateType');
