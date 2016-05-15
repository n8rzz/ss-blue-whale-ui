import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ClientContactList from '../../content/ClientContact/ClientContactList';
import {
    createContactForClient,
    saveContactForClient,
    deleteContactForClient
} from '../../../domain/clientContact/actions/ClientContactSingleActions';

/**
 * @class ClientContactContainer
 * @extends React/Component
 */
const ClientContactContainer = props => {
    return (
        <ClientContactList
            client={ props.client }
            contacts={ props.client.client_contacts }
            onCreateContactForClient={ props.createContactForClient }
            onSaveContactForClient={ props.saveContactForClient }
            onDeleteContactForClient={ props.deleteContactForClient } />
    );
};

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientContactContainer.displayName = 'ClientContactContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientContactContainer.propTypes = {
    /**
     * @property client
     * @type {ClientType|Object}
     */
    client: PropTypes.object,

    /**
     * @property createContactForClient
     * @type {Function}
     */
    createContactForClient: PropTypes.func,

    /**
     * @property saveContactForClient
     * @type {Function}
     */
    saveContactForClient: PropTypes.func,

    /**
     * @property deleteContactForClient
     * @type {Function}
     */
    deleteContactForClient: PropTypes.func
};


/**
 * @function mapStoreToProps
 * @param {Object}
 * @return {Object}
 */
const mapStoreToProps = state => ({
    client: state.client.payload
});

/**
 * @function mapDispatchToProps
 * @return {Object}
 */
const mapDispatchToProps = dispatch => {
    return {
        createContactForClient: (clientId, formValues) => dispatch(createContactForClient(clientId, formValues)),
        saveContactForClient: (clientId, formValues) => dispatch(saveContactForClient(clientId, formValues)),
        deleteContactForClient: (clientId, clientContactId) => dispatch(deleteContactForClient(clientId, clientContactId))
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ClientContactContainer);
