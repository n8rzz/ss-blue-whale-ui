import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _map from 'lodash/map';
import FlashMessage from '../FlashMessage/FlashMessage';
import Table from '../../layout/Table/Table';

/**
 * @class ProjectTypeList
 * @extends React/Component
 */
export default class ProjectTypeList extends Component {

    /**
     * @method _composeTableBody
     * @return {JSX}
     */
    _composeTableBody() {
        const bodyRowChildren = _map(this.props.projectTypes, (projectType, index) => {
            const projectTypeLink = `/projectTypes/${projectType.id}`;

            return (
                <tr key={ index } onClick={ () => this.onRowClick(index) }>
                    <td>{ projectType.id }</td>
                    <td>
                        <Link className="link" to={ projectTypeLink  }>{ projectType.name }</Link>
                    </td>
                    <td>{ projectType.description }</td>
                    <td>{ projectType.dueDate }</td>
                </tr>
            );
        });

        return (
            <tbody>
                { bodyRowChildren }
            </tbody>
        );
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
            <div className="wrapper">
                <FlashMessage />

                <Table headingList={ ['id', 'name', 'description', 'due date'] }>
                    { this._composeTableBody() }
                </Table>
            </div>
        );
    }

    /**
     * @for ProjectTypeList
     * @method onRowClick
     * @param {React.SyntheticEvent} event
     * @callback
     */
    onRowClick = event => {
        event.preventDefault();
    };
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
