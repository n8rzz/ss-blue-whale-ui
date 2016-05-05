import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    saveClient,
    deleteClient
} from '../../domain/client/actions/ClientSingleActions';
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
                onSaveClient={ this.props.saveClient }
                onRemoveClient={ this.props.deleteClient } />
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
     * @property saveClient
     * @type {Function}
     */
    saveClient: PropTypes.func,

    /**
     * @property deleteClient
     * @type {Function}
     */
    deleteClient: PropTypes.func
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
        saveClient: (id, formValues) => dispatch(saveClient(id, formValues)),
        deleteClient: id => dispatch(deleteClient(id))
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ClientSingleContainer);
