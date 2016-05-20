import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTaskItemList } from '../../../domain/taskItem/actions/TaskItemListActions';
import TaskItemList from '../../content/TaskItem/TaskItemList';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class TaskItemContainer
 */
class TaskItemContainer extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <TaskItemList
                taskItems={ this.props.taskItems } />
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
TaskItemContainer.displayName = 'TaskItemContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
TaskItemContainer.propTypes = {
    /**
     * @props taskItems
     * @type {TaskItemListType|Array}
     */
    taskItems: PropTypes.array,

    /**
     * @props getTaskItemList
     * @type {Function}
     */
    getTaskItemList: PropTypes.func
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {
        taskItems: state.taskItems.payload
    };
}

export default connect(
    mapStateToProps
)(TaskItemContainer);
