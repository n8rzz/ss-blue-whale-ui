import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { ClientContactCreationType } from '../../../domain/clientContact/types/ClientContactTypes';

const Form = t.form.Form;

/**
 * @class AddContactToClientForm
 * @extends React/Component
 */
export default class AddContactToClientForm extends Component {

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <Form
                    ref="addContactToClientForm"
                    type={ ClientContactCreationType } />

                <button onClick={ this.onSubmit }>Save new contact</button>
            </div>
        );
    }

    onSubmit = event => {
        event.preventDefault();

        const addContactToClientFormValues = this.refs.addContactToClientForm.getValue();

        console.log(addContactToClientFormValues);
        // TODO: add props method here to add contact to client
    }
}

/**
 * @property displayName
 * @type {String}
 */
AddContactToClientForm.displayName = 'AddContactToClientForm';

/**
 * @property propTypes
 * @type {Object}
 */
AddContactToClientForm.propTypes = {};
