import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createNoteForClient } from '../../../domain/note/actions/NoteSingleActions';
import NoteList from '../../content/note/NoteList';

/**
 *
 */
const NoteContainer = props => {
    return (
        <NoteList
            clientId={ props.clientId }
            notes={ props.notes }
            onCreateNoteForClient={ props.createNoteForClient } />
    );
};

/**
 *
 * @type {String}
 */
NoteContainer.displayName = 'NoteContainer';

/**
 *
 * @type {Object}
 */
NoteContainer.propTypes = {
    /**
     * @property clientId
     * @type {Number}
     */
    clientId: PropTypes.number.isRequired,

    /**
     * @property createNoteForClient
     * @type {Function}
     * @required
     */
    createNoteForClient: PropTypes.func.isRequired
};

/**
 * @function mapStoreToProps
 * @param {Object}
 * @return {Object}
 */
const mapStoreToProps = state => ({
    clientId: state.client.payload.id,
    notes: state.client.payload.notes
});

/**
 * @function mapDispatchToProps
 * @return {Object}
 */
const mapDispatchToProps = dispatch => {
    return {
        createNoteForClient: (clientId, noteRequest) => dispatch(createNoteForClient(clientId, noteRequest))
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(NoteContainer);
