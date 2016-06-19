import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../../domain/project/actions/ProjectSingleActions';
import { getProjectTypeList } from '../../../domain/projectType/actions/ProjectTypeListActions';
import ProjectCreate from '../../content/Project/Create/ProjectCreate';

/**
 * @class ClientProjectsContainer
 * @extends React/Component
 */
class ClientProjectsContainer extends Component {

    /**
     * @for ClientProjectsContainer
     * @method _composeCreateProject
     * @return {JSX}
     */
    _composeCreateProject() {
        return (
            <ProjectCreate
                client={ this.props.client }
                projectTypes={ this.props.projectTypes }
                onCreateProject={ this.props.createProject }/>
        );
    }

    /**
     * @for ClientProjectsContainer
     * @method render
     * @return {JSX}
     */
    render() {
        return this._composeCreateProject();
    }
}

/**
 * @property displayName
 * @type {string}
 * @static
 */
ClientProjectsContainer.displayName = 'ClientProjectsContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientProjectsContainer.propTypes = {
    /**
     * @property client
     * @type {ClientType}
     */
    client: PropTypes.object,

    /**
     * @property projectTypes
     * @type {ProjectTypeList|Array}
     */
    projectTypes: PropTypes.array,

    /**
     * @property getProjectTypeList
     * @type {Function}
     */
    getProjectTypeList: PropTypes.func,

    /**
     * @property createProject
     * @type {Function}
     */
    createProject: PropTypes.func
};

/**
 * @function mapStoreToProps
 * @param {Object} state
 * @return {Object}
 */
const mapStoreToProps = state => ({
    client: state.client.payload,
    projectTypes: state.projectTypes.payload
});

/**
 * @function mapDispatchToProps
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({
    getProjectTypeList: () => dispatch(getProjectTypeList()),
    createProject: projectCreationRequest => dispatch(createProject(projectCreationRequest))
});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ClientProjectsContainer);
