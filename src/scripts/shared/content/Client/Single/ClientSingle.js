import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { ClientPreviewType } from '../../../domain/client/types/ClientTypes';
import ClientContactContainer from '../../../container/clientContact/ClientContactContainer';
import NoteContainer from '../../../container/note/NoteContainer';

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
     * @private
     * @for ClientSingle
     * @method _composeClientContacts
     * @return {JSX}
     */
    _composeClientContacts() {
        if (t.Nil.is(this.props.client.client_contacts)) {
            return null;
        }

        return (
            <ClientContactContainer />
        );
    }

    /**
     * @private
     * @for ClientSingle
     * @method _composeClientNotes
     * @return {JSX}
     */
    _composeClientNotes() {
        if (t.Nil.is(this.props.client.notes)) {
            return null;
        }

        return (
            <NoteContainer />
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
                    type={ ClientPreviewType } />

                <button onClick={ this.onRemoveClient }>Delete Client</button>
                <button type="submit" onClick={ this.onSubmit }>Update Client</button>

                { this._composeClientContacts() }
                { this._composeClientNotes() }

            </div>
        );
    }

    /**
     * @for ClientSingle
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
    onRemoveClient: PropTypes.func.isRequired
};
