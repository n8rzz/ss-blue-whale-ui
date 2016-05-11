import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    saveClient,
    deleteClient
} from '../../domain/client/actions/ClientSingleActions';
import {
    createContactForClient,
    saveContactForClient,
    deleteContactForClient
} from '../../domain/clientContact/actions/ClientContactSingleActions';
import {
    createNoteForClient
} from '../../domain/note/actions/NoteSingleActions';

import ClientSingle from '../../content/Client/Single/ClientSingle';

/**
 * Connected component that provides an entry point for all actions pertaining to `Client` concerns.
 *
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
            <ClientSingle
                client={ this.props.client }
                onSaveClient={ this.props.saveClient }
                onRemoveClient={ this.props.deleteClient }
                onCreateContactForClient={ this.props.createContactForClient }
                onSaveContactForClient={ this.props.saveContactForClient }
                onDeleteContactForClient={ this.props.deleteContactForClient }
                onCreateNoteForClient={ this.props.createNoteForClient } />
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
    deleteClient: PropTypes.func,

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
    deleteContactForClient: PropTypes.func,

    /**
     * @property createNoteForClient
     * @type {Function}
     */
    createNoteForClient: PropTypes.func
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
        saveClient: (clientId, formValues) => dispatch(saveClient(clientId, formValues)),
        deleteClient: clientId => dispatch(deleteClient(clientId)),
        createContactForClient: (clientId, formValues) => dispatch(createContactForClient(clientId, formValues)),
        saveContactForClient: (clientId, formValues) => dispatch(saveContactForClient(clientId, formValues)),
        deleteContactForClient: (clientId, clientContactId) => dispatch(deleteContactForClient(clientId, clientContactId)),
        createNoteForClient: (clientId, noteRequest) => dispatch(createNoteForClient(clientId, noteRequest))
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ClientSingleContainer);
