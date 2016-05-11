import React, { Component, PropTypes } from 'react';
import AddNoteToClientForm from './AddNoteToClientForm';
import SingleNoteItem from './SingleNoteItem';

/**
 * @class NoteList
 * @extends React/Component
 */
export default class NoteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldShowCreate: false,
            isEditingNoteId: -1
        };
    }

    /**
     * @method _composeAddNote
     * @return {JSX}
     */
    _composeAddNote() {
        if (!this.state.shouldShowCreate) {
            return null;
        }

        return (
            <AddNoteToClientForm
                onCreateNoteForClient={ this.props.onCreateNoteForClient }/>
        );
    }

    _composeNoteList() {
        const nodeItems = this.props.notes.map((note, index) => {
            return (
                <SingleNoteItem note={ note } key={ index } />
            );
        });

        return (
            <ul>
                { nodeItems }
            </ul>
        );
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h3>Notes</h3>

                <div>
                    <button onClick={ this.onToggleAddNote }>
                        { this.state.shouldShowCreate ? 'Cancel' : 'Add New Note' }
                    </button>
                </div>

                { this._composeAddNote() }
                { this._composeNoteList() }
            </div>
        );
    }

    /**
     * @method onToggleAddNote
     */
    onToggleAddNote = () => {
        this.setState({
            shouldShowCreate: !this.state.shouldShowCreate,
            isEditingNoteId: -1
        });
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
NoteList.displayName = 'NoteList';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
NoteList.propTypes = {
    /**
     * @property notes
     * @type {Object}
     */
    notes: PropTypes.array,

    /**
     * @property onCreateNoteForClient
     * @type {Function}
     * @required
     */
    onCreateNoteForClient: PropTypes.func.isRequired
};
