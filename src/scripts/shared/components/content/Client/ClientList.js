import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import VerticalRhythm from '../../repeater/VerticalRhythm/VerticalRhythm';
import Table from '../../layout/Table/Table';

import _debounce from 'lodash/debounce';
import _filter from 'lodash/filter';
import _map from 'lodash/map';
import _includes from 'lodash/includes';

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
     * @for ClientList
     * @method _composeClientList
     * @return {JSX}
     */
    _composeClientList() {
        return _map(this.state.filteredClientList, (client, index) => {
            const singleClientLink = `/clients/${client.id}`;

            return (
                <li key={ index }>
                    <h2 className="hdg hdg_2">
                        <Link to={ singleClientLink }>{ client.name }</Link>
                    </h2>
                </li>
            );
        });
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

                {/* TODO: Abatract to Alert component */}
                <div className="alert">
                    [  ALERT / FLASH MESSAGE ]
                </div>

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

                <Table
                    headings={ ['id', 'status', 'name', 'city', 'state'] }
                    data={ this.state.filteredClientList } />
            </div>
        );
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
