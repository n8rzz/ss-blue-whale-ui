import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveClient } from '../../domain/client/actions/ClientSingleActions';
import SingleClient from '../../content/Client/Single/Single';

/**
 * @class ClientSingleContainer
 * @extends React/Component
 */
class ClientSingleContainer extends Component {
    /**
     * @for ClientSingleContainer
     * @method render
     * @return {JSX}
     */
    render() {
        if (!this.props.client) {
            return null;
        }

        return (
            <SingleClient
                client={ this.props.client }
                onSaveClient={ this.props.saveClient } />
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
     * @property client
     * @type {ClientType}
     */
    client: PropTypes.object,
    /**
     * @property getSingleClient
     * @type {Function}
     */
    getSingleClient: PropTypes.func,

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
