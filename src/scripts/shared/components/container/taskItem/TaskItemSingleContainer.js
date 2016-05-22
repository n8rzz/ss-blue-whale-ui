import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    saveTaskItem,
    deleteTaskItem
} from '../../../domain/taskItem/actions/TaskItemSingleActions';
import TaskItemSingle from '../../content/TaskItem/Single/TaskItemSingle';

/**
 * @class TaskItemSingleContainer
 * @extends React/Component
 */
class TaskItemSingleContainer extends Component {
    /**
     * @for TaskItemSingleContainer
     * @method render
     * @return {JSX}
     */
    render() {
        if (!this.props.taskItem) {
            return null;
        }

        return (
            <TaskItemSingle
                taskItem={ this.props.taskItem }
                onSaveTaskItem={ this.props.saveTaskItem }
                onDeleteTaskItem={ this.props.deleteTaskItem }/>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
TaskItemSingleContainer.displayName = 'TaskItemSingleContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
TaskItemSingleContainer.propTypes = {
    /**
     * @property taskItem
     * @type {TaskItem|Object}
     */
    taskItem: PropTypes.object,

    /**
     * @property saveTaskItem
     * @type {Function}
     * @required
     */
    saveTaskItem: PropTypes.func.isRequired,

    /**
     * @property deleteTaskItem
     * @type {Function}
     * @required
     */
    deleteTaskItem: PropTypes.func.isRequired
};

/**
 * @function mapStoreToProps
 * @param {Object} state
 * @return {Function}
 */
const mapStoreToProps = state => ({
    taskItem: state.taskItem.payload
});

/**
 * @function mapStoreToProps
 * @param {Function} dispatch
 * @return {Function}
 */
const mapDispatchToProps = dispatch => ({
    saveTaskItem: (...args) => dispatch(saveTaskItem(...args)),
    deleteTaskItem: (...args) => dispatch(deleteTaskItem(...args))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(TaskItemSingleContainer);
