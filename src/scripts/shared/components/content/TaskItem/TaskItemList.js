import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import FlashMessage from '../FlashMessage/FlashMessage';
import Table from '../../layout/Table/Table';

import _map from 'lodash/map';

/**
 * @class TaskItemList
 */
class TaskItemList extends Component {

    /**
     *
     * @method _composeTableBody
     * @return {JSX}
     */
    _composeTableBody() {
        const bodyRowChildren = _map(this.props.taskItems, (taskItem, index) => {
            const taskItemUrlString = `/taskItems/${taskItem.id}`;

            return (
                <tr key={ index } onClick={ () => this.onRowClick(index) }>
                    <td>{ taskItem.id }</td>
                    <td>
                        <Link className="link" to={ taskItemUrlString  }>{ taskItem.name }</Link>
                    </td>
                    <td>{ taskItem.startDate }</td>
                    <td>{ taskItem.endDate }</td>
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
        if (this.props.taskItems.length === 0) {
            return null;
        }

        return (
            <div className="wrapper">
                <FlashMessage />

                <Table headingList={ ['id', 'name', 'start date', 'end date'] } >
                    { this._composeTableBody() }
                </Table>
            </div>
        );
    }

    /**
     * @for TaskItemList
     * @method onRowClick
     * @param  {Number} rowIndex
     * @callback
     */
    onRowClick(rowIndex) {
        console.log(this.props.taskItems[rowIndex]);
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
TaskItemList.displayName = 'TaskItemList';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
TaskItemList.propTypes = {
    /**
     * @props taskItems
     * @type {TaskItemListType}
     * @required
     */
    taskItems: PropTypes.array.isRequired
};

export default TaskItemList;
