import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

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
                <h1>Task Items</h1>
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
TaskItemContainer.propTypes = {};

// /**
//  * @method mapStateToProps
//  * @param {Object} state
//  * @return {Object}
//  */
// function mapStateToProps(state) {
//     return {
//         projects: state.projects.payload
//     };
// }
//
// /**
//  * @method mapDispatchToProps
//  * @param {Object} dispatch
//  * @return {Object}
//  */
// function mapDispatchToProps(dispatch) {
//     return {
//         projects: dispatch(getBookList())
//     };
// }
//
// /**
//  * @method mergeProps
//  * @param {Object} state
//  * @param {Object} dispatch
//  * @param {Object} ownProps
//  * @return {Object}
//  */
// function mergeProps(state, dispatch, ownProps) {
//     return Object.assign({}, state, ownProps);
// }
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     mergeProps
// )(TaskItemContainer);
export default TaskItemContainer;
