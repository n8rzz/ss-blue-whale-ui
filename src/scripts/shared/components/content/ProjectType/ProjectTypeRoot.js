import React, { Component, PropTypes } from 'react';
import PageTitle from '../../layout/PageTitle/PageTitle';

/**
 * Top level wrapper for ProjectType copmonents
 *
 * @class ProjectTypeRoot
 * @extends React/Component
 */
export default class ProjectTypeRoot extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <PageTitle title="ProjectTypes" />
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
ProjectTypeRoot.displayName = 'ProjectTypeRoot';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ProjectTypeRoot.propTypes = {
    /**
     * @property children
     * @type {Object}
     */
    children: PropTypes.object
};
