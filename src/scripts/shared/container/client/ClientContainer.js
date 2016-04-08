import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class ClientContainer
 */
class ClientContainer extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h1>Clients</h1>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ClientContainer.displayName = 'ClientContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
ClientContainer.propTypes = {};

// /**
//  * @method mapStateToProps
//  * @param {Object} state
//  * @return {Object}
//  */
// function mapStateToProps(state) {
//     return {
//         clients: state.clients.payload
//     };
// }
//
// /**
//  * @method mapDispatchToProps
//  * @param {Object} dispatch
//  * @return {Object}
//  */
// function mapDispatchToProps(dispatch) {
//     return {
//         clients: dispatch(getBookList())
//     };
// }
//
// /**
//  * @method mergeProps
//  * @param {Object} state
//  * @param {Object} dispatch
//  * @param {Object} ownProps
//  * @return {Object}
//  */
// function mergeProps(state, dispatch, ownProps) {
//     return Object.assign({}, state, ownProps);
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     mergeProps
// )(ClientContainer);
export default ClientContainer;
