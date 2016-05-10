import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import {
    ClientCreationType
    // ,
    // ClientPreviewType
} from '../../../domain/client/types/ClientTypes';
// import { ClientContactCreationType } from '../../../domain/clientContact/types/ClientContactTypes';
import ClientContactList from '../../ClientContact/ClientContactList';

const Form = t.form.Form;

/**
 * @class ClientSingle
 * @extends React/Component
 */
export default class ClientSingle extends Component {
    /**
     * @constructor
     * @for ClientSingle
     */
    constructor(props) {
        super(props);

        this.state = {
            clientFormValues: props.client
        };
    }

    /**
     * @for ClientSingle
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ clientFormValues: nextProps.client });
    }

    /**
     * @method _composeClientContacts
     * @return {JSX}
     */
    _composeClientContacts() {
        const clientContacts = this.props.client.client_contacts;

        if (t.Nil.is(clientContacts)) {
            return null;
        }

        return (
            <ClientContactList
                clientId={ this.props.client.id }
                contacts={ clientContacts }
                onRequestToAddContactToClient={ this.onRequestToAddContactToClient }
                onSaveContactForClient={ this.onSaveContactForClient } />
        );
    }

    /**
     * @for ClientSingle
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <ul>
                    <li>Main</li>
                    <li>Projects</li>
                    <li>History</li>
                    <li>Notes</li>
                </ul>

                <Form
                    ref="clientForm"
                    value={ this.state.clientFormValues }
                    type={ ClientCreationType } />

                <button onClick={ this.onRemoveClient }>Delete Client</button>
                <button type="submit" onClick={ this.onSubmit }>Update Client</button>

                { this._composeClientContacts() }

            </div>
        );
    }

    /**
     * @method onRemoveClient
     * @return {Function}
     * @callback
     */
    onRemoveClient = (event) => {
        event.preventDefault();

        this.props.onRemoveClient(this.props.client.id);
    }

    /**
     * @for ClientSingle
     * @method onSubmit
     * @param {Event} event
     * @return {Function}
     */
    onSubmit = (event) => {
        event.preventDefault();

        const clientFormValues = this.refs.clientForm.getValue();
        // const clientFormValidation = this.refs.clientForm.validate();

        if (clientFormValues !== null) {
            this.props.onSaveClient(this.props.client.id, clientFormValues);
        }
    }

    /**
     * @for ClientSingle
     * @method onRequestToAddContactToClient
     * @param {ClientContactCreationType} clientContactFormValues
     * @return {Function}
     */
    onRequestToAddContactToClient = clientContactCreationRequest => {
        const clientContactRequest = clientContactCreationRequest.addClientIdToContact(this.props.client.id);

        this.props.onCreateContactForClient(this.props.client.id, clientContactRequest);
    }

    /**
     * @for ClientSingle
     * @method onSaveContactForClient
     * @param {ClientContactType|Object} clientContactRequest
     * @return {Function}
     */
    onSaveContactForClient = clientContactRequest => {
        this.props.onSaveContactForClient(this.props.client.id, clientContactRequest);
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientSingle.displayName = 'ClientSingle';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
ClientSingle.propTypes = {

    /**
     * @property client
     * @type {ClientType}
     */
    client: PropTypes.object,

    /**
     * @property onSaveClient
     * @type {Function}
     * @required
     */
    onSaveClient: PropTypes.func.isRequired,

    /**
     * @property onRemoveClient
     * @type {Function}
     * @required
     */
    onRemoveClient: PropTypes.func.isRequired,

    /**
     * @property onCreateContactForClient
     * @type {Function}
     * @required
     */
    onCreateContactForClient: PropTypes.func.isRequired,

    /**
     * @property onSaveContactForClient
     * @type {Function}
     * @required
     */
    onSaveContactForClient: PropTypes.func.isRequired
};
