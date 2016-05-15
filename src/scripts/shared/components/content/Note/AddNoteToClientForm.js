import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { NoteCreationRequestType } from '../../../domain/note/types/NoteTypes';

const Form = t.form.Form;

/**
 * @class AddNoteToClientForm
 * @extends React/Component
 */
export default class AddNoteToClientForm extends Component {
    /**
     * @for AddNoteToClientForm
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <Form
                    ref="addNoteForm"
                    type={ NoteCreationRequestType } />

                <button type="submit" onClick={ this.onSubmit }>Add Note</button>
            </div>
        );
    }

    /**
     * @for AddNoteToClientForm
     * @method onSibmit
     * @param {Event}
     * @callback
     */
    onSubmit = event => {
        event.preventDefault();

        const addNoteFormValues = this.refs.addNoteForm.getValue();

        if (!t.Nil.is(addNoteFormValues)) {
            this.props.onCreateNoteForClient(addNoteFormValues);
        }
    };
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
AddNoteToClientForm.displayName = 'AddNoteToClientForm';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
AddNoteToClientForm.propTypes = {
    /**
     * @property onCreateNoteForClient
     * @type {Function}
     * @required
     */
    onCreateNoteForClient: PropTypes.func.isRequired
};
