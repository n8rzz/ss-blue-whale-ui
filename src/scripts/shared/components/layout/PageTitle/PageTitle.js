import React, { Component, PropTypes } from 'react';

/**
 * @class PageTitle
 * @extends React/Component
 */
export default class PageTitle extends Component {
    render() {
        return (
            <h1 className="hdg hdg_1">{ this.props.title }</h1>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
PageTitle.displayName = 'PageTitle';

/**
 * @property propTypes
 * @type {String}
 * @static
 */
PageTitle.propTypes = {
    /**
     * @property title
     * @type {String}
     * @required
     */
    title: PropTypes.string.isRequired
};
