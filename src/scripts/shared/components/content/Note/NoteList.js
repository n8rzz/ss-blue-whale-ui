import React, { Component, PropTypes } from 'react';
import AddNoteToClientForm from './AddNoteToClientForm';
import SingleNoteItem from './SingleNoteItem';

/**
 * @class NoteList
 * @extends React/Component
 */
export default class NoteList extends Component {
    /**
     * @constructor
     * @param  {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            shouldShowCreate: false,
            isEditingNoteId: -1
        };
    }

    /**
     * @private
     * @for NoteList
     * @method _composeAddNote
     * @return {JSX}
     */
    _composeAddNote() {
        if (!this.state.shouldShowCreate) {
            return null;
        }

        return (
            <AddNoteToClientForm
                onCreateNoteForClient={ this.onCreateNoteForClient }/>
        );
    }

    /**
     * @private
     * @for NoteList
     * @method _composeNoteList
     * @return {JSX}
     */
    _composeNoteList() {
        if (this.props.notes.length === 0) {
            return (
                <ul>
                    <li>
                        <div>No Notes</div>
                    </li>
                </ul>
            );
        }

        const noteItems = this.props.notes.map((note, index) => {
            return (
                <SingleNoteItem note={ note } key={ index } />
            );
        });

        return (
            <ul>
                { noteItems }
            </ul>
        );
    }

    /**
     * @for NoteList
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h3 className="hdg hdg_3">Notes</h3>

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
     * @for NoteList
     * @method onToggleAddNote
     * @callback
     */
    onToggleAddNote = () => {
        this.setState({
            shouldShowCreate: !this.state.shouldShowCreate,
            isEditingNoteId: -1
        });
    }

    /**
     * @for NoteList
     * @method onCreateNoteForClient
     * @param {NoteCreationRequestType}
     * @return {Function}
     */
    onCreateNoteForClient = noteCreateRequest => {
        this.props.onCreateNoteForClient(this.props.clientId, noteCreateRequest);
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
     * @property
     * @type {Number}
     * @required
     */
    clientId: PropTypes.number.isRequired,

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
