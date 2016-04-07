import BookRepository from '../../domain/book/BookRepository';

export const GET_BOOK_LIST_START = 'GET_BOOK_LIST_START';
export const GET_BOOK_LIST_SUCCESS = 'GET_BOOK_LIST_SUCCESS';
export const GET_BOOK_LIST_FAIL = 'GET_BOOK_LIST_FAIL';

/* istanbul ignore next */
const getBookListStart = () => ({
    type: GET_BOOK_LIST_START
});

/* istanbul ignore next */
const getBookListSuccess = payload => ({
    type: GET_BOOK_LIST_SUCCESS,
    payload: payload
});

/* istanbul ignore next */
const getBookListError = errors => ({
    type: GET_BOOK_LIST_SUCCESS,
    payload: null,
    errors
});

export const getBookList = () => {
    return dispatch => {
        dispatch(getBookListStart());

        return BookRepository.getBookList()
            .then(response => dispatch(getBookListSuccess(response)))
            .catch(error => {
                dispatch(getBookListError(error));
                throw error;
            });
    };
};
