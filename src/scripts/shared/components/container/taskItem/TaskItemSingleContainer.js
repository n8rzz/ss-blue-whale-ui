import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


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
        return (
            <div>TaskItemSingleContainer</div>
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
TaskItemSingleContainer.propTypes = {};

/**
 * @function mapStoreToProps
 * @param {Object} state
 * @return {Function}
 */
const mapStoreToProps = state => {
    taskItem: state.taskItem.payload
};

/**
 * @function mapStoreToProps
 * @param {Function} dispatch
 * @return {Function}
 */
const mapDispatchToProps = dispatch => {
    
};


export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(TaskItemSingleContainer);
