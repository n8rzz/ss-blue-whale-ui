import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import Button from '../../layout/Button/Button';
import { SessionRequestType } from '../../../domain/session/types/SessionTypes';

const Form = t.form.Form;

const FORM_OPTIONS = {
    fields: {
        password: {
            type: 'password'
        }
    }
};

/**
 * @class Login
 * @extends React/Component
 */
export default class Login extends Component {
    /**
     * @for Login
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <Form
                    ref="createSessionForm"
                    options={ FORM_OPTIONS }
                    type={ SessionRequestType } />

                <Button onClick={ this.onSubmit }>Login</Button>
            </div>
        );
    }

    /**
     * @for Login
     * @method onSubmit
     * @param {React.SyntheticEvent} event
     * @callback
     */
    onSubmit = event => {
        event.preventDefault();

        const createSessionFormValues = this.refs.createSessionForm.getValue();

        if (!t.Nil.is(createSessionFormValues)) {
            this.props.onCreateSession(createSessionFormValues);
        }
    };
}

/**
 * @property displayName
 * @type {string}
 * @static
 */
Login.displayName = 'Login';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
Login.propTypes = {
    /**
     * @property onCreateSession
     * @type {Function}
     * @required
     */
    onCreateSession: PropTypes.func.isRequired
};
