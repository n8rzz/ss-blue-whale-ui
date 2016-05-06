import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createProjectType } from '../../domain/projectType/actions/ProjectTypeActions';
import ProjectTypeCreate from '../../content/ProjectType/Create/ProjectTypeCreate';

/**
 * @class ProjectTypeCreateContainer
 * @extends React/Component
 */
class ProjectTypeCreateContainer extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <ProjectTypeCreate
                    onCreateProjectType={ this.props.createProjectType }/>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ProjectTypeCreateContainer.displayName = 'ProjectTypeCreateContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
ProjectTypeCreateContainer.propTypes = {
    /**
     * @props createProjectType
     * @type {Array}
     */
    createProjectType: PropTypes.func
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = () => ({});

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        createProjectType: (formValues) => dispatch(createProjectType(formValues))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectTypeCreateContainer);
