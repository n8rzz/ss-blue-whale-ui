import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';

import { ClientType } from '../../../domain/client/types/ClientTypes';

const Form = t.form.Form;

/**
 * @class SaveCreate
 * @extends React/Component
 */
export default class SaveCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            saveClientFormValues: props.client
        };
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        console.log(this.props);
        return (
            <div>
                <Form
                    ref="saveClientForm"
                    value={ this.state.saveClientFormValues }
                    type={ ClientType } />

                <button type="submit" onClick={ this.onSubmit }>Update Client</button>
            </div>
        );
    }

    /**
     * @method onSubmit
     * @param {Event} event
     * @return {Function}
     */
    onSubmit = (event) => {
        event.preventDefault();

        const saveClientFormValues = this.refs.saveClientForm.getValue();
        // const saveClientFormValidation = this.refs.saveClientForm.validate();

        if (!t.Nil.is(saveClientFormValues) && ClientType.is(saveClientFormValues)) {
            this.props.onSaveClient(saveClientFormValues);
        }
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
SaveCreate.displayName = 'SaveCreate';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
SaveCreate.propTypes = {
    /**
     * @property onSaveClient
     * @type {Function}
     * @required
     */
    onSaveClient: PropTypes.func.isRequired
};
