import React, { Component, PropTypes } from 'react';
import SingleContactItem from './SingleContactItem';
import AddContactToClientForm from './AddContactToClientForm';

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
                    onRequestToAddContactToClient={ this.props.onRequestToAddContactToClient } />
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
                    onSaveContactForClient={ this.props.onSaveContactForClient }
                    onDeleteContactForClient={ this.props.onDeleteContactForClient } />
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
                <h2>Contacts</h2>

                <button onClick={ this.onToggleAddContactForm }>
                    { this.state.shouldShowAddContact ? 'Cancel' : 'Add New Contact' }
                </button>

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
    onToggleAddContactForm = (event) => {
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
    requestToEditClient = (contactId) => {
        this.setState({ isEditingContactId: contactId });
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
     * @property contacts
     * @type {Array}
     * @required
     */
    contacts: PropTypes.array.isRequired,

    /**
     * @property clientId
     * @type {Number}
     */
    clientId: PropTypes.number.isRequired,

    /**
     * @property onRequestToAddContactToClient
     * @type {Function}
     * @required
     */
    onRequestToAddContactToClient: PropTypes.func.isRequired,

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
