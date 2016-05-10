import React, { Component, PropTypes } from 'react';
import { ClientContactType } from '../../domain/clientContact/types/ClientContactTypes';
import t from 'tcomb-form';

const Form = t.form.Form;

export default class SingleContactListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editClientContactFormValues: props.contact
        };
    }

    /**
     * @method _composeFormView
     * @return {JSX}
     */
    _composeFormView() {
        return (
            <div>
                <Form
                    ref="editClientContactForm"
                    value={ this.state.editClientContactFormValues }
                    type={ ClientContactType } />

                <button onClick={ this.props.onCancelEdit }>Cancel</button>
                <button onClick={ this.saveContactForClient }>Update</button>
            </div>
        );
    }

    /**
     * @method _composeStaticView
     * @return {JSX}
     */
    _composeStaticView() {
        const { contact } = this.props;

        return (
            <div>
                <div>
                    <h4>{ contact.name }</h4>
                </div>
                <div>position: { contact.position }</div>
                <div>main: { contact.businessPhone }</div>
                <div>mobile: { contact.mobilePhone }</div>
                <div>email: { contact.email }</div>
                <div>
                    <button onClick={ this.requestToEditClient }>Edit Contact</button>
                </div>
            </div>
        );
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        let children = this._composeStaticView();
        if (this.props.isEditingId === this.props.contact.id) {
            children = this._composeFormView();
        }

        return (
            <li>
                { children }
            </li>
        );
    }

    /**
     * @method onFormChange
     * @param {ClientContactType|Object} formValues
     * @callback
     */
    onFormChange = formValues => {
        this.setState({ editClientContactFormValues: formValues });
    };

    /**
     * @method requestToEditClient
     * @callback
     */
    requestToEditClient = () => {
        this.props.onRequestToEditContact(this.props.contact.id);
    };

    /**
     * @method saveContactForClient
     * @callback
     */
    saveContactForClient = () => {
        const editClientContactFormValues = this.refs.editClientContactForm.getValue();

        if (!t.Nil.is(editClientContactFormValues)) {
            this.props.onSaveContactForClient(editClientContactFormValues);
        }
    }
}

/**
 * @property displayName
 * @type {String}
 */
SingleContactListItem.displayName = 'SingleContactListItem';

/**
 * @property propTypes
 * @type {Object}
 */
SingleContactListItem.propTypes = {
    /**
     * @property contact
     * @type {Object}
     * @required
     */
    contact: PropTypes.object.isRequired,

    /**
     * @property isEditingId
     * @type {Boolean}
     */
    isEditingId: PropTypes.number,

    /**
     * @property onCancelEdit
     * @type {Function}
     * @required
     */
    onCancelEdit: PropTypes.func.isRequired,

    /**
     * @property onRequestToEditContact
     * @type {Function}
     * @required
     */
    onRequestToEditContact: PropTypes.func.isRequired,

    /**
     * @property index
     * @type {Function}
     * @required
     */
    onSaveContactForClient: PropTypes.func.isRequired
};
