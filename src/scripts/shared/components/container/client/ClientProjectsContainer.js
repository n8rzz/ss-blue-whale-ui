import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../../domain/project/actions/ProjectSingleActions';
import { getProjectTypeList } from '../../../domain/projectType/actions/ProjectTypeListActions';
import ClientProjectList from '../../content/Client/ClientProjectList/ClientProjectList';
import ProjectCreate from '../../content/Project/Create/ProjectCreate';
import VerticalRhythm from '../../repeater/VerticalRhythm/VerticalRhythm';
import Button from '../../layout/Button/Button';

/**
 * @class ClientProjectsContainer
 * @extends React/Component
 */
class ClientProjectsContainer extends Component {
    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            shouldShowCreate: false
        };
    }

    /**
     * @for ClientProjectsContainer
     * @method _composeCreateProject
     * @return {JSX}
     */
    _composeCreateProject() {
        if (!this.state.shouldShowCreate) {
            return (
                <VerticalRhythm increment={ 1 }>
                    <Button
                        onClick={ this.onToggleCreate }>
                        Create new Project
                    </Button>
                </VerticalRhythm>
            );
        }

        return (
            <ProjectCreate
                client={ this.props.client }
                projectTypes={ this.props.projectTypes }
                onCreateProject={ this.props.createProject }
                onRequestToCancel={ this.onToggleCreate } />
        );
    }

    /**
     * @for ClientProjectsContainer
     * @method _composeClientProjectList
     * @return {JSX}
     */
    _composeClientProjectList() {
        if (this.state.shouldShowCreate) {
            return null;
        }

        return (
            <ClientProjectList projects={ this.props.client.projects }/>
        );
    }

    /**
     * @for ClientProjectsContainer
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                { this._composeCreateProject() }
                { this._composeClientProjectList() }
            </div>
        );
    }

    /**
     * @for ClientProjectsContainer
     * @method onToggleCreate
     * @param {React.SyntheticEvent} event
     * @callback
     */
    onToggleCreate = event => {
        event.preventDefault();

        this.setState({ shouldShowCreate: !this.state.shouldShowCreate });
    };
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
