import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { RegistrationRequestType } from '../../../domain/registration/types/RegistrationTypes';
import FlashMessage from '../FlashMessage/FlashMessage';
import Button from '../../layout/Button/Button';

const Form = t.form.Form;

/**
 * @property FORM_OPTIONS
 * @type {Object}
 * @final
 */
const FORM_OPTIONS = {
    fields: {
        password: {
            type: 'password'
        },
        password_confirmation: {
            type: 'password'
        }
    }
};

/**
 * @class CreateUser
 * @extends React/Component
 */
export default class CreateUser extends Component {

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                {/* TODO: move to RegistrationContainer component */}
                <FlashMessage />

                <Form
                    ref="createUserForm"
                    options={ FORM_OPTIONS }
                    type={ RegistrationRequestType } />

                <Button onClick={ this.onSubmit }>Add User</Button>
            </div>
        );
    }

    /**
     * @for CreateUser
     * @method onSubmit
     * @return {Function}
     * @callback
     */
    onSubmit = () => {
        const createUserFormValues = this.refs.createUserForm.getValue();

        if (!t.Nil.is(createUserFormValues)) {
            this.props.onCreateUser(createUserFormValues);
        }
    }
}

/**
 * @property displayName
 * @type {string}
 * @static
 */
CreateUser.displayName = 'CreateUser';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
CreateUser.propTypes = {
    /**
     * @property userErrors
     * @type {Object}
     */
    userErrors: PropTypes.object,

    /**
     * @property onCreateUser
     * @type {Function}
     * @required
     */
    onCreateUser: PropTypes.func.isRequired
};
