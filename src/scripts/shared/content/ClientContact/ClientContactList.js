import React, { Component, PropTypes } from 'react';
import SingleContactListItem from './SingleContactListItem';
import AddContactToClientForm from './AddContactToClientForm';

/**
 * @class ClientContactList
 * @extends React/Component
 */
export default class ClientContactList extends Component {
    /**
     * @constructor
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            shouldShowAddContact: false
        };
    }

    /**
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps() {
        this.setState({ shouldShowAddContact: false });
    }

    /**
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
                <SingleContactListItem key={ index }
                    contact={ contact } />
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
    onRequestToAddContactToClient: PropTypes.func.isRequired
};
