import React, { Component, PropTypes } from 'react';
import SingleContactItem from './SingleContactItem';
import AddContactToClientForm from './AddContactToClientForm';
import Button from '../../layout/Button/Button';

/**
 * @class ClientContactList
 * @extends React/Component
 */
export default class ClientContactList extends Component {
    /**
     * @constructor
     * @for ClientContactList
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            shouldShowAddContact: false,
            isEditingContactId: -1
        };
    }

    /**
     * @for ClientContactList
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps() {
        this.setState({
            shouldShowAddContact: false,
            isEditingContactId: -1
        });
    }

    /**
     * @private
     * @for ClientContactList
     * @method _composeAddContactForm
     * @return {JSX}
     */
    _composeAddContactForm() {
        if (!this.state.shouldShowAddContact) {
            return null;
        }

        return (
            <div>
                <AddContactToClientForm
                    onRequestToAddContactToClient={ this.onRequestToAddContactToClient } />
            </div>
        );
    }

    /**
     * @private
     * @for ClientContactList
     * @method _composeContacts
     * @return {JSX}
     */
    _composeContacts() {
        return this.props.contacts.map((contact, index) => {
            return (
                <SingleContactItem
                    key={ index }
                    contact={ contact }
                    isEditingId={ this.state.isEditingContactId }
                    onRequestToEditContact={ this.requestToEditClient }
                    onCancelEdit={ this.cancelEdit }
                    onSaveContactForClient={ this.onSaveContactForClient }
                    onDeleteContactForClient={ this.onDeleteContactForClient } />
            );
        });
    }

    /**
     * @for ClientContactList
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h2 className="hdg hdg_2">Contacts</h2>

                <Button onClick={ this.onToggleAddContactForm }>
                    { this.state.shouldShowAddContact ? 'Cancel' : 'Add New Contact' }
                </Button>

                { this._composeAddContactForm() }

                <ul>
                    { this._composeContacts() }
                </ul>
            </div>
        );
    }

    /**
     * @for ClientContactList
     * @method onToggleAddContactForm
     * @param  {Object} event
     * @callback
     */
    onToggleAddContactForm = event => {
        event.preventDefault();

        this.setState({ shouldShowAddContact: !this.state.shouldShowAddContact });
    }

    /**
     * @for ClientContactList
     * @method cancelEdit
     * @callback
     */
    cancelEdit = () => {
        this.setState({ isEditingContactId: -1 });
    }

    /**
     * @for ClientContactList
     * @method requestToEditClient
     * @param {Number} contactId
     * @callback
     */
    requestToEditClient = contactId => {
        this.setState({ isEditingContactId: contactId });
    }

    /**
     * @for ClientContactList
     * @method onRequestToAddContactToClient
     * @param {ClientContactCreationType} clientContactCreationRequest
     * @return {Function}
     */
    onRequestToAddContactToClient = clientContactCreationRequest => {
        const clientContactRequest = clientContactCreationRequest.addClientIdToContact(this.props.client.id);

        this.props.onCreateContactForClient(this.props.client.id, clientContactRequest);
    }

    /**
     * @for ClientContactList
     * @method onSaveContactForClient
     * @param {ClientContactType|Object} clientContactRequest
     * @return {Function}
     */
    onSaveContactForClient = clientContactRequest => {
        this.props.onSaveContactForClient(this.props.client.id, clientContactRequest);
    }

    /**
     * @for ClientContactList
     * @method onDeleteContactForClient
     * @param {Number} clientContactId
     * @return {Function}
     */
    onDeleteContactForClient = clientContactId => {
        this.props.onDeleteContactForClient(this.props.client.id, clientContactId);
    }
}

/**
 * @property displayName
 * @type {String}
 */
ClientContactList.displayName = 'ClientContactList';

/**
 * @property propTypes
 * @type {Object}
 */
ClientContactList.propTypes = {
    /**
     * @property client
     * @type {ClientType|Object}
     */
    client: PropTypes.object.isRequired,

    /**
     * @property contacts
     * @type {Array}
     * @required
     */
    contacts: PropTypes.array.isRequired,

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
    onSaveContactForClient: PropTypes.func.isRequired,

    /**
     * @property onDeleteContactForClient
     * @type {Function}
     * @required
     */
    onDeleteContactForClient: PropTypes.func.isRequired
};
