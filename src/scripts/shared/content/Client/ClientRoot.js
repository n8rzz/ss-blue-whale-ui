import React, { Component, PropTypes } from 'react';

/**
 * Top level wrapper for Client copmonents
 *
 * @class ClientRoot
 * @extends React/Component
 */
export default class ClientRoot extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h1>Clients</h1>
                { this.props.children }
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientRoot.displayName = 'ClientRoot';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientRoot.propTypes = {
    /**
     * @property children
     * @type {Object}
     */
    children: PropTypes.object
};
