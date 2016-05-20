import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
                taskItem={ this.props.taskItem } />
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
    taskItem: PropTypes.object
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
// const mapDispatchToProps = dispatch => {
//
// };


export default connect(
    mapStoreToProps
)(TaskItemSingleContainer);
