import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class ProjectTypeContainer
 */
class ProjectTypeContainer extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h1>Project Types</h1>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ProjectTypeContainer.displayName = 'ProjectTypeContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
ProjectTypeContainer.propTypes = {};

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
// )(ProjectTypeContainer);
export default ProjectTypeContainer;
