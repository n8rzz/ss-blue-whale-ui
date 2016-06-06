import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * @class SessionContainer
 * @extends React/Component
 */
class SessionContainer extends Component {
    /**
     * @for SessionContainer
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                SessionContainer
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
SessionContainer.displayName = 'SessionContainer';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
SessionContainer.propTypes = {};

/**
 * @function mapStoreToProps
 * @param  {Object} state
 * @return {Object}
 */
const mapStoreToProps = state => ({});

/**
 * @function mapDispatchToProps
 * @param {Function} dispatch
 * @return {Object}
 */
const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(SessionContainer);
