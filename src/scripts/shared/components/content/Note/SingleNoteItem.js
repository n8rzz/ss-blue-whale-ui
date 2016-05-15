import React, { Component, PropTypes } from 'react';

/**
 * @class SingleNoteItem
 * @extends React/Component
 */
export default class SingleNoteItem extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <li>
                <div>
                    { this.props.note.content }
                </div>
                <div>
                    { this.props.note.created_at }
                </div>
            </li>
        );
    }
}

/**
 * @property displayName
 * @type {Object}
 * @static
 */
SingleNoteItem.displayName = 'SingleNoteItem';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
SingleNoteItem.propTypes = {
    /**
     * @property note
     * @type {Object}
     */
    note: PropTypes.object
};
