import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getProjectList } from '../../../domain/project/actions/ProjectListActions';
import ProjectList from '../../content/Project/ProjectList';
import PageTitle from '../../layout/PageTitle/PageTitle';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class ProjectListContainer
 */
class ProjectListContainer extends Component {
    /**
     * @for ProjectListContainer
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <PageTitle title="Projects" />

                <ProjectList projects={ this.props.projects } />
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ProjectListContainer.displayName = 'ProjectListContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
ProjectListContainer.propTypes = {
    /**
     * @property projects
     * @type {ProjectListType}
     */
    projects: PropTypes.array
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => ({
    projects: state.projects.payload
});

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
    projects: dispatch(getProjectList())
});

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
const mergeProps = (state, dispatch, ownProps) => {
    return Object.assign({}, state, ownProps);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ProjectListContainer);
