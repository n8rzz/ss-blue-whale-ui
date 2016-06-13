import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import PageTitle from '../../layout/PageTitle/PageTitle';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class ProjectContainer
 */
class ProjectContainer extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <PageTitle title="Projects" />
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ProjectContainer.displayName = 'ProjectContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
ProjectContainer.propTypes = {};

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
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ProjectContainer);
export default ProjectContainer;
