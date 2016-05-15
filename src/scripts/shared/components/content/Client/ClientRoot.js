import React, { Component, PropTypes } from 'react';
import PageTitle from '../../layout/PageTitle/PageTitle';

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
                <PageTitle title="Clients" />
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
