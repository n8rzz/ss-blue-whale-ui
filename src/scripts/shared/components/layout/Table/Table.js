import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import _map from 'lodash/map';

/**
 * @class Table
 * @extends React/Component
 */
export default class Table extends Component {

    /**
     * @method _composeTableHead
     * @return {JSX}
     */
    _composeTableHead() {
        const headerItems = _map(this.props.headingList, (heading, index) => {
            return (
                <th key={ index }>
                    <a className="link" href="#" onClick={ (event) => this.onHeaderClick(event, index) }>
                        { heading }
                    </a>
                </th>
            );
        });

        return (
            <thead>
                <tr>
                    { headerItems }
                </tr>
            </thead>
        );
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <table className="table">
                { this._composeTableHead() }

                { this.props.children}
            </table>
        );
    }

    /**
     * @method onHeaderClick
     * @param  {React.SyntheticEvent} event
     * @param  {Number} headerIndex
     * @callback
     */
    onHeaderClick(event, headerIndex) {
        event.preventDefault();
        console.log(this.props.headingList[headerIndex]);
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
Table.displayName = 'Table';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
Table.propTypes = {
    /**
     * @property headingList
     * @type {node}
     * @required
     */
    headingList: PropTypes.node.isRequired,
    /**
     * @property children
     * @type {node}
     */
    children: PropTypes.node
};
