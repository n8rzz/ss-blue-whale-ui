import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TaskItemList from '../../content/TaskItem/TaskItemList';

/**
 * @class TaskItemListContainer
 */
class TaskItemListContainer extends Component {
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
TaskItemListContainer.displayName = 'TaskItemListContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
TaskItemListContainer.propTypes = {
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
)(TaskItemListContainer);
