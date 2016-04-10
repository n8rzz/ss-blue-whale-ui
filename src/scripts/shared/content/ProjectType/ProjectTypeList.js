import React, { Component, PropTypes } from 'react';
import { map as _map } from 'lodash';

/**
 * @class ProjectTypeList
 */
class ProjectTypeList extends Component {
    /**
     * @method _composeProjectTypeList
     * @return {JSX}
     */
    _composeProjectTypeList() {
        return _map(this.props.projectTypes, (type, index) => {
            return (
                <li key={ index }>
                    <h2>{ type.name }</h2>
                    <div>
                        { type.description }
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
