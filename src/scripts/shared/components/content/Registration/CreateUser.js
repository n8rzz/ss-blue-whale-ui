import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { RegistrationRequestType } from '../../../domain/registration/types/RegistrationTypes';
import Button from '../../layout/Button/Button';

const Form = t.form.Form;

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
            <div className="grid">
                <div className="grid-col grid-col-md_4of6 mix-grid-col-md_push1of6">
                    <Form
                        ref="createUserForm"
                        type={ RegistrationRequestType } />

                    <Button onClick={ () => this.onSubmit() }>Add User</Button>
                </div>
            </div>
        );
    }

    onClick = event => {
        console.log(this.refs.createUserForm.getValue());
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
CreateUser.propTypes = {};
