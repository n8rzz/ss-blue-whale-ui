import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveClient } from '../../domain/client/actions/ClientSingleActions';

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

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientSingleContainer.propTypes = {
    /**
     * @property saveClient
     * @type {Function}
     */
    saveClient: PropTypes.func
};

/**
 * @function mapStoreToProps
 * @param {Object}
 * @return {Object}
 */
const mapStoreToProps = (state) => ({
    client: state.client.payload
});

/**
 * @function mapDispatchToProps
 * @return {Object}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        saveClient: (id, formValues) => dispatch(saveClient(id, formValues))
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ClientSingleContainer);
