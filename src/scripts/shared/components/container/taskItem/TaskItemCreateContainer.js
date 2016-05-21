import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createTaskItem } from '../../../domain/taskItem/actions/TaskItemSingleActions';
import TaskItemCreate from '../../content/TaskItem/Create/TaskItemCreate';

/**
 * @class TaskItemCreateContainer
 * @extends React/Component
 */
class TaskItemCreateContainer extends Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <TaskItemCreate
                    onCreateTaskItem={ this.props.createTaskItem }/>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
TaskItemCreateContainer.displayName = 'TaskItemCreateContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
TaskItemCreateContainer.propTypes = {
    /**
     * @property createTaskItem
     * @type {Function}
     */
    createTaskItem: PropTypes.func
};

/**
 * @function mapStoreToProps
 * @return {Object}
 */
const mapStoreToProps = () => ({});

/**
 * @function mapDispatchToProps
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
    createTaskItem: (...args) => dispatch(createTaskItem(args))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(TaskItemCreateContainer);
