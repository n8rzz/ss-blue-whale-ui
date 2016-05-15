import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getProjectTypeList } from '../../../domain/projectType/actions/ProjectTypeListActions';
import ProjectTypeList from '../../content/ProjectType/ProjectTypeList';

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
        if (!this.props.projectTypes) {
            return null;
        }

        return (
            <div>
                <ProjectTypeList projectTypes={ this.props.projectTypes } />
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
ProjectTypeContainer.propTypes = {
    /**
     * @props projectTypes
     * @type {Array}
     */
    projectTypes: PropTypes.array
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {
        projectTypes: state.projectTypes.payload
    };
}

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        getProjectTypeList: dispatch(getProjectTypeList())
    };
}

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
function mergeProps(state, dispatch, ownProps) {
    return Object.assign({}, state, dispatch, ownProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ProjectTypeContainer);
