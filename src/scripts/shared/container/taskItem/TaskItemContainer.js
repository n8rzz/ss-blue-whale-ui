import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTaskItemList } from '../../domain/taskItem/actions/TaskItemListActions';
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
        console.log(this.props);
        return (
            <div>
                <h1>Task Items</h1>
                <TaskItemList taskItems={ this.props.taskItems } />
            </div>
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

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        projects: dispatch(getTaskItemList())
    };
}

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
function mergeProps(state, dispatch, ownProps) {
    return Object.assign({}, state, dispatch, ownProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TaskItemContainer);
