import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveProjectType } from '../../domain/projectType/actions/ProjectTypeActions';
import ProjectTypeSingle from '../../content/ProjectType/Create/ProjectTypeCreate';

/**
 * @class ProjectTypeSingleContainer
 * @extends React/Component
 */
class ProjectTypeSingleContainer extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <ProjectTypeSingle />
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
ProjectTypeSingleContainer.displayName = 'ProjectTypeSingleContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
ProjectTypeSingleContainer.propTypes = {
    /**
     * @props saveProjectType
     * @type {Array}
     */
    saveProjectType: PropTypes.func
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = (state) => {
    debugger;
    return {
        projectType: state.projectType.payload
    };
};

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        saveProjectType: (id, formValues) => dispatch(saveProjectType(id, formValues))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectTypeSingleContainer);
