import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import VerticalRhythm from '../../../repeater/VerticalRhythm/VerticalRhythm';
import Button from '../../../layout/Button/Button';
import { ClientCreationType } from '../../../../domain/client/types/ClientTypes';

const Form = t.form.Form;

const FORM_OPTIONS = {
    fields: {
        id: {
            type: 'hidden'
        },
        fax: {
            type: 'tel'
        },
        phone: {
            type: 'tel'
        },
        email: {
            type: 'email'
        },
        website: {
            type: 'url'
        }
    }
};

/**
 * @class ClientCreate
 * @extends React/Component
 */
export default class ClientCreate extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="wrapper">
                <VerticalRhythm increment={ 1 }>
                    <Form
                        ref="createClientForm"
                        options={ FORM_OPTIONS }
                        type={ ClientCreationType } />
                </VerticalRhythm>

                <Button isSubmit onClick={ this.onSubmit } >
                    Add Client
                </Button>
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

        const createClientFormValues = this.refs.createClientForm.getValue();
        // const createClientFormValidation = this.refs.createClientForm.validate();

        if (!t.Nil.is(createClientFormValues) && ClientCreationType.is(createClientFormValues)) {
            this.props.onCreateClient(createClientFormValues);
        }
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientCreate.displayName = 'ClientCreate';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
ClientCreate.propTypes = {
    /**
     * @property onCreateClient
     * @type {Function}
     * @required
     */
    onCreateClient: PropTypes.func.isRequired
};
