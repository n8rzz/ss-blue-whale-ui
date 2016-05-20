import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTaskItemList } from '../../../domain/taskItem/actions/TaskItemListActions';
import TaskItemList from '../../content/TaskItem/TaskItemList';
import PageTitle from '../../layout/PageTitle/PageTitle';

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
            <div>
                <PageTitle title="Task Items" />
                { this.props.children }
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
const mapStateToProps = state => ({
    taskItems: state.taskItems.payload
});

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
    getTaskItemList: dispatch(getTaskItemList())
});

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
function mergeProps(state, dispatch, ownProps) {
    return Object.assign({}, state, ownProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TaskItemContainer);
