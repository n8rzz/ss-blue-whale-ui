import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { ClientPreviewType } from '../../../../domain/client/types/ClientTypes';
import Tabs from '../../../layout/Tabs/Tabs';
import ClientContactContainer from '../../../container/clientContact/ClientContactContainer';
import NoteContainer from '../../../container/note/NoteContainer';
import VerticalRhythm from '../../../repeater/VerticalRhythm/VerticalRhythm';
import Button from '../../../layout/Button/Button';

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
 * @class ClientSingle
 * @extends React/Component
 */
export default class ClientSingle extends Component {
    /**
     * @constructor
     * @for ClientSingle
     */
    constructor(props) {
        super(props);

        this.state = {
            clientFormValues: props.client
        };
    }

    /**
     * @for ClientSingle
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ clientFormValues: nextProps.client });
    }

    /**
     * @private
     * @for ClientSingle
     * @method _composeClientContacts
     * @return {JSX}
     */
    _composeClientContacts() {
        if (t.Nil.is(this.props.client.client_contacts)) {
            return null;
        }

        return (
            <VerticalRhythm increment={ 1 }>
                <ClientContactContainer />
            </VerticalRhythm>
        );
    }

    /**
     * @private
     * @for ClientSingle
     * @method _composeClientNotes
     * @return {JSX}
     */
    _composeClientNotes() {
        if (t.Nil.is(this.props.client.notes)) {
            return null;
        }

        return (
            <VerticalRhythm increment={ 1 }>
                <NoteContainer />
            </VerticalRhythm>

        );
    }

    /**
     * @for ClientSingle
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <Tabs>
                <Tabs.Tab title="Main">
                    <VerticalRhythm increment={ 2 }>
                        <VerticalRhythm increment={ 1 }>
                            <Form
                                ref="clientForm"
                                options={ FORM_OPTIONS }
                                type={ ClientPreviewType }
                                value={ this.state.clientFormValues } />
                        </VerticalRhythm>

                        <Button isSubmit onClick={ this.onRemoveClient }>Delete Client</Button>
                        <Button isSubmit onClick={ this.onSubmit } >Update Client</Button>
                    </VerticalRhythm>

                        { this._composeClientContacts() }
                </Tabs.Tab>
                <Tabs.Tab title="Projects">
                    <div>
                        PROJECTS
                    </div>
                </Tabs.Tab>
                <Tabs.Tab title="History">
                    <div>
                        CLOSED PROJECTS
                    </div>
                </Tabs.Tab>
                <Tabs.Tab title="Notes">
                    { this._composeClientNotes() }
                </Tabs.Tab>
            </Tabs>
        );
    }

    /**
     * @for ClientSingle
     * @method onRemoveClient
     * @return {Function}
     * @callback
     */
    onRemoveClient = (event) => {
        event.preventDefault();

        this.props.onRemoveClient(this.props.client.id);
    }

    /**
     * @for ClientSingle
     * @method onSubmit
     * @param {Event} event
     * @return {Function}
     */
    onSubmit = (event) => {
        event.preventDefault();

        const clientFormValues = this.refs.clientForm.getValue();
        // const clientFormValidation = this.refs.clientForm.validate();

        if (clientFormValues !== null) {
            this.props.onSaveClient(this.props.client.id, clientFormValues);
        }
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientSingle.displayName = 'ClientSingle';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
ClientSingle.propTypes = {

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
    onSaveClient: PropTypes.func.isRequired,

    /**
     * @property onRemoveClient
     * @type {Function}
     * @required
     */
    onRemoveClient: PropTypes.func.isRequired
};
