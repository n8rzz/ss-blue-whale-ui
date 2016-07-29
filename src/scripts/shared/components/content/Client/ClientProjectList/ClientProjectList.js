import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';
import Table from '../../../layout/Table/Table';

/**
 * @class ClientProjectList
 */
export default class ClientProjectList extends Component {
    /**
     * @for ClientProjectList
     * @method _composeTableBody
     * @return {JSX}
     */
    _composeTableBody() {
        const bodyRowChildren = _map(this.props.projects, (row, index) => {
            return (
                <tr key={ index } onClick={ () => this.onRowClick(index) }>
                    <td>{ row.id }</td>
                    <td>{ row.project_type.name }</td>
                    <td>{ row.startDate }</td>
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
     * @for ClientProjectList
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <Table headingList={ ['id', 'type', 'startDate'] } >
                { this._composeTableBody() }
            </Table>
        );
    }
}

/**
 * @property displayName
 * @type {string}
 * @static
 */
ClientProjectList.displayName = 'ClientProjectList';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientProjectList.propTypes = {
    /**
     * @property projects
     * @type {Array}
     * @requried
     */
    projects: PropTypes.array.isRequired
};
