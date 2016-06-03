import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import VerticalRhythm from '../../repeater/VerticalRhythm/VerticalRhythm';
import FlashMessage from '../FlashMessage/FlashMessage';
import Table from '../../layout/Table/Table';

import _debounce from 'lodash/debounce';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';
import _map from 'lodash/map';

/**
 * @property SEARCH_DELAY_IN_MS
 * @type {Number}
 */
const SEARCH_DELAY_IN_MS = 80;

/**
 * @class ClientList
 * @extends React/Component
 */
class ClientList extends Component {

    /**
     * @for ClientList
     * @constructor
     * @param  {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            filteredClientList: props.clients
        };
    }

    /**
     * @for ClientList
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredClientList: nextProps.clients
        });
    }

    /**
     *
     * @method _composeTableBody
     * @return {JSX}
     */
    _composeTableBody() {
        const bodyRowChildren = _map(this.props.clients, (row, index) => {
            const clientLinkString = `/clients/${row.id}`;

            return (
                <tr key={ index } onClick={ () => this.onRowClick(index) }>
                    <td>{ row.id }</td>
                    <td>
                        <Link className="link" to={ clientLinkString  }>{ row.name }</Link>
                    </td>
                    <td>{ row.status }</td>
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
     * @for ClientList
     * @method render
     * @return {JSX}
     */
    render() {
        if (this.props.clients.length === 0) {
            return null;
        }

        return (
            <div className="wrapper">
                <FlashMessage />

                {/* TODO: Abstract to SearchComponent */}
                <VerticalRhythm increment={ 1 }>
                    <ul>
                        <li>
                            <input
                                type="text"
                                ref="searchQuery"
                                placeholder="search"
                                onChange={ this.onSearchChange } />
                        </li>
                    </ul>
                </VerticalRhythm>

                <Table headingList={ ['id', 'name', 'status', 'city', 'state'] } >
                    { this._composeTableBody() }
                </Table>
            </div>
        );
    }

    /**
     * @method onRowClick
     * @param  {Number} rowIndex
     * @callback
     */
    onRowClick(rowIndex) {
        console.log(this.props.clients[rowIndex]);
    }


    // TODO: abstract into another component
    onSearchChange = () => {
        const searchQuery = this.refs.searchQuery.value;

        this.onSearchChangeDebounced(searchQuery);
    }

    onSearchChangeDebounced = _debounce((serachQuery) => this.onSearchQueryChange(serachQuery), SEARCH_DELAY_IN_MS)

    onSearchQueryChange = searchQuery => {
        const filteredClientList = _filter(this.props.clients, (client) => {
            return _includes(client.name.toLowerCase(), searchQuery.toLowerCase());
        });

        this.setState({
            filteredClientList
        });
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ClientList.displayName = 'ClientList';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ClientList.propTypes = {
    /**
     * @props clients
     * @type {ClientListType}
     * @required
     */
    clients: PropTypes.array.isRequired
};

export default ClientList;
