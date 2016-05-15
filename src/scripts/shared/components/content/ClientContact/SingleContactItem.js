import React, { Component, PropTypes } from 'react';
import { ClientContactType } from '../../../domain/clientContact/types/ClientContactTypes';
import t from 'tcomb-form';

const Form = t.form.Form;

/**
 * @class SingleContactItem
 * @extends React/Component
 */
export default class SingleContactItem extends Component {
    /**
     * @constructor
     * @for SingleContactItem
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            editClientContactFormValues: props.contact
        };
    }

    /**
     * @for SingleContactItem
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ editClientContactFormValues: nextProps.contact });
    }

    /**
     * @private
     * @for SingleContactItem
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

                <button onClick={ this.deleteContactForClient }>Delete</button>
                <button onClick={ this.props.onCancelEdit }>Cancel</button>
                <button onClick={ this.saveContactForClient }>Update</button>
            </div>
        );
    }

    /**
     * @private
     * @for SingleContactItem
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
                    <button onClick={ this.deleteContactForClient }>Delete</button>
                    <button onClick={ this.requestToEditClient }>Edit Contact</button>
                </div>
            </div>
        );
    }

    /**
     * @for SingleContactItem
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
     * @for SingleContactItem
     * @method onFormChange
     * @param {ClientContactType|Object} formValues
     * @callback
     */
    onFormChange = formValues => {
        this.setState({ editClientContactFormValues: formValues });
    };

    /**
     * @for SingleContactItem
     * @method requestToEditClient
     * @callback
     */
    requestToEditClient = () => {
        this.props.onRequestToEditContact(this.props.contact.id);
    };

    /**
     * @for SingleContactItem
     * @method saveContactForClient
     * @callback
     */
    saveContactForClient = () => {
        const editClientContactFormValues = this.refs.editClientContactForm.getValue();

        if (!t.Nil.is(editClientContactFormValues)) {
            this.props.onSaveContactForClient(editClientContactFormValues);
        }
    }

    /**
     * @for SingleContactItem
     * @method deleteContactForClient
     * @return {Function}
     * @callback
     */
    deleteContactForClient = () => {
        this.props.onDeleteContactForClient(this.props.contact.id);
    }
}

/**
 * @property displayName
 * @type {String}
 */
SingleContactItem.displayName = 'SingleContactItem';

/**
 * @property propTypes
 * @type {Object}
 */
SingleContactItem.propTypes = {
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
    onSaveContactForClient: PropTypes.func.isRequired,

    /**
     * @property onDeleteContactForClient
     * @type {Function}
     * @required
     */
    onDeleteContactForClient: PropTypes.func.isRequired
};
