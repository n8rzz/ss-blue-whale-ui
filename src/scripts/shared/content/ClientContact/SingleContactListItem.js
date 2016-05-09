import React, { Component, PropTypes } from 'react';

export default class SingleContactListItem extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        const { contact } = this.props;

        return (
            <li>
                <div>
                    <h4>{ contact.name }</h4>
                </div>
                <div>position: { contact.position }</div>
                <div>main: { contact.businessPhone }</div>
                <div>mobile: { contact.mobilePhone }</div>
                <div>email: { contact.email }</div>
            </li>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 */
SingleContactListItem.displayName = 'SingleContactListItem';

/**
 * @property propTypes
 * @type {Object}
 */
SingleContactListItem.propTypes = {
    /**
     * @property contact
     * @type {Object}
     * @required
     */
    contact: PropTypes.object.isRequired

    /**
     * Index passed from parent thats used for React's `key` tag repeated elements.
     *
     * @property index
     * @type {Number}
     * @required
     */
    // index: PropTypes.number.isRequired
};
