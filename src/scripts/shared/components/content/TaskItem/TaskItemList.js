import React, { Component, PropTypes } from 'react';
import { map as _map } from 'lodash';

/**
 * @class TaskItemList
 */
class TaskItemList extends Component {
    /**
     * @method _composeTaskItemList
     * @return {JSX}
     */
    _composeTaskItemList() {
        return _map(this.props.taskItems, (task, index) => {
            return (
                <li key={ index }>
                    <h2 className="hdg hdg_2">{ task.name }</h2>
                    <div>
                        { task.description }
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
        if (this.props.taskItems.length === 0) {
            return null;
        }

        return (
            <ul>
                { this._composeTaskItemList() }
            </ul>
        );
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
