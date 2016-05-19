import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
        const headerItems = _map(this.props.headings, (heading, index) => {
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
     * @method _composeTableBody
     * @return {JSX}
     */
    _composeTableBody() {
        const bodyRowChildren = _map(this.props.data, (row, index) => {
            const clientLinkString = `/clients/${row.id}`;

            return (
                <tr key={ index } onClick={ () => this.onRowClick(index) }>
                    <td>{ row.id }</td>
                    <td>{ row.status }</td>
                    <td>
                        <Link className="link" to={ clientLinkString  }>{ row.name }</Link>
                    </td>
                    <td>{ row.city }</td>
                    <td>{ row.state }</td>
                </tr>
            );
        });

        return (
            <tbody>
                { bodyRowChildren }
            </tbody>
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
                { this._composeTableBody() }
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
        console.log(this.props.headings[headerIndex]);
        event.preventDefault();
    }

    /**
     * @method onRowClick
     * @param  {Number} rowIndex
     * @callback
     */
    onRowClick(rowIndex) {
        console.log(this.props.data[rowIndex]);
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
    headings: PropTypes.node,
    data: PropTypes.any
};
