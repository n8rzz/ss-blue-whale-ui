import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    saveProjectType,
    removeProjectType
} from '../../../domain/projectType/actions/ProjectTypeActions';
import ProjectTypeSingle from '../../content/ProjectType/Single/ProjectTypeSingle';

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
                <ProjectTypeSingle
                    projectType={ this.props.projectType }
                    taskItems={ this.props.taskItems }
                    onSaveProjectType={ this.props.saveProjectType }
                    onRemoveProjectType={ this.props.removeProjectType }/>
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
     * @property projectType
     * @type {Object}
     */
    projectType: PropTypes.object,

    /**
     * @property taskItems
     * @type {Array}
     */
    taskItems: PropTypes.array,

    /**
     * @props saveProjectType
     * @type {Function}
     */
    saveProjectType: PropTypes.func,

    /**
     * @props removeProjectType
     * @type {Function}
     */
    removeProjectType: PropTypes.func
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = (state) => {
    return {
        projectType: state.projectType.payload,
        taskItems: state.taskItems.payload
    };
};

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        saveProjectType: (id, formValues) => dispatch(saveProjectType(id, formValues)),
        removeProjectType: id => dispatch(removeProjectType(id))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectTypeSingleContainer);
