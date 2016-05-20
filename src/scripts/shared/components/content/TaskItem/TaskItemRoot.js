import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../layout/PageTitle/PageTitle';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class TaskItemRoot
 */
class TaskItemRoot extends Component {
    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <PageTitle title="Task Items" />
                { this.props.children }
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
TaskItemRoot.displayName = 'TaskItemRoot';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
TaskItemRoot.propTypes = {
    /**
     * @props taskItems
     * @type {TaskItemListType|Array}
     */
    taskItems: PropTypes.array,

    /**
     * @props children
     * @type {node}
     */
    children: PropTypes.node
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
const mapStateToProps = state => ({
    taskItems: state.taskItems.payload
});

export default connect(
    mapStateToProps
)(TaskItemRoot);
