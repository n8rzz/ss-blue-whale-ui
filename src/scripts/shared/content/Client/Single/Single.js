import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';

import { ClientType } from '../../../domain/client/types/ClientTypes';

const Form = t.form.Form;

/**
 * @class SaveClient
 * @extends React/Component
 */
export default class SaveClient extends Component {
    /**
     * @constructor
     * @for SaveClient
     */
    constructor(props) {
        super(props);

        this.state = {
            clientFormValues: props.client
        };
    }

    /**
     * @for SaveClient
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({clientFormValues: nextProps.client});
    }

    /**
     * @for SaveClient
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <Form
                    ref="clientForm"
                    value={ this.state.clientFormValues }
                    type={ ClientType } />

                <button type="submit" onClick={ this.onSubmit }>Update Client</button>
            </div>
        );
    }

    /**
     * @for SaveClient
     * @method onSubmit
     * @param {Event} event
     * @return {Function}
     */
    onSubmit = (event) => {
        event.preventDefault();

        const clientFormValues = this.refs.clientForm.getValue();
        // const clientFormValidation = this.refs.clientForm.validate();

        if (!t.Nil.is(clientFormValues) && ClientType.is(clientFormValues)) {
            this.props.onSaveClient(this.props.client.id, clientFormValues);
        }
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
SaveClient.displayName = 'SaveClient';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
SaveClient.propTypes = {
    /**
     * @property client
     * @type {ClientType}
     */
    client: PropTypes.object,
    /**
     * @property onSaveClient
     * @type {Function}
     * @required
     */
    onSaveClient: PropTypes.func.isRequired
};
