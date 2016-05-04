import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { createClient } from '../../domain/client/actions/ClientSingleActions';

/**
 * @class ClientSingleContainer
 * @extends React/Component
 */
class ClientSingleContainer extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>ClientSingleContainer</div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientSingleContainer.displayName = 'ClientSingleContainer';

// /**
//  * @property propTypes
//  * @type {Object}
//  * @static
//  */
// ClientSingleContainer.propTypes = {
//     /**
//      * @property createClient
//      * @type {Function}
//      */
//     createClient: PropTypes.function
// };

// /**
//  * @function mapStoreToProps
//  * @return {Object}
//  */
// const mapStoreToProps = () => ({});
//
// /**
//  * @function mapDispatchToProps
//  * @return {Object}
//  */
// const mapDispatchToProps = (dispatch) => {
//     return {
//         createClient: (formValues) => dispatch(createClient(formValues))
//     };
// };

export default ClientSingleContainer;
