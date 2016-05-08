import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _map from 'lodash/map';

/**
 * @class ProjectTypeList
 */
class ProjectTypeList extends Component {
    /**
     * @method _composeProjectTypeList
     * @return {JSX}
     */
    _composeProjectTypeList() {
        return _map(this.props.projectTypes, (projectType, index) => {
            const projectTypeLink = `/projectTypes/${projectType.id}`;

            return (
                <li key={ index }>
                    <h2>
                        <Link to={ projectTypeLink }>{ projectType.name }</Link>
                    </h2>
                    <div>
                        { projectType.description }
                    </div>
                </li>
            );
        });
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        if (this.props.projectTypes.length === 0) {
            return null;
        }

        return (
            <ul>
                { this._composeProjectTypeList() }
            </ul>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ProjectTypeList.displayName = 'ProjectTypeList';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ProjectTypeList.propTypes = {
    /**
     * @props projectTypes
     * @type {ProjectTypeListType}
     * @required
     */
    projectTypes: PropTypes.array.isRequired
};

export default ProjectTypeList;
