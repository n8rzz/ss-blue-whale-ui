import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getBookList } from '../actions/books/BookActions';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  App
 */
export class App extends React.Component {

    /**
     * @method  composeBookList
     * @return {JSX}
     */
    composeBookList() {
        const { books } = this.props;

        return books.map((book, index) => {
            return (
                <li key={ index }>
                    <div>ID: { book.id }</div>
                    <div>Title: { book.title }</div>
                </li>
            );
        });
    }

    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        if (this.props.books.length > 0) {
            return (
                <div>
                    <h1>Books</h1>
                    <h3>... with actions and reducers</h3>
                    <ul>
                        { this.composeBookList() }
                    </ul>
                </div>
            );
        }

        return (
            <div>
                <h1>This is a React app!</h1>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
App.displayName = 'App';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
App.propTypes = {
    /**
     * @props books
     * @type Array
     */
    books: PropTypes.array
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {
        books: state.books.payload
    };
}

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        books: dispatch(getBookList())
    };
}

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
function mergeProps(state, dispatch, ownProps) {
    return Object.assign({}, state, ownProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(App);
