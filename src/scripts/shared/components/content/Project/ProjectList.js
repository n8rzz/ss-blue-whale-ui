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
 * @class ProjectList
 * @extends React/Component
 */
class ProjectList extends Component {

    /**
     * @for ProjectList
     * @constructor
     * @param  {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            filteredProjectList: props.projects
        };
    }

    /**
     * @for ProjectList
     * @method componentWillReceiveProps
     * @param {Object} nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredProjectList: nextProps.projects
        });
    }

    /**
     * @for ProjectList
     * @method _composeSearchBar
     * @return {JSX}
     */
    _composeSearchBar() {
        const { filteredProjectList } = this.state;
        const { projects } = this.props;

        let filteredItemCount = null;
        if (projects.length > filteredProjectList.length) {
            filteredItemCount = (
                <li>
                    <div className="txt mix-txt_light">
                        { `${filteredProjectList.length} of ${projects.length}` }
                    </div>
                </li>
            );
        }

        return (
            <VerticalRhythm increment={ 1 }>
                {/* TODO: Abstract to SearchComponent */}
                <ul className="hlist hlist_loose">
                    <li>
                        <input
                            type="search"
                            ref="searchQuery"
                            placeholder="search"
                            onChange={ this.onSearchChange } />
                    </li>
                    { filteredItemCount }
                </ul>
            </VerticalRhythm>
        );
    }

    /**
     *
     * @method _composeTableBody
     * @return {JSX}
     */
    _composeTableBody() {
        const bodyRowChildren = _map(this.state.filteredProjectList, (row, index) => {
            return (
                <tr key={ index } onClick={ () => this.onRowClick(index) }>
                    <td>{ row.id }</td>
                    <td>
                        <Link
                            to={ `/clients/${row.client.id}` }
                            className="link">
                            { row.client.name }
                        </Link>
                    </td>
                    <td>
                        <Link
                            to={ `/projectTypes/${row.project_type.id}` }
                            className="link">
                            { row.project_type.name }
                        </Link>
                    </td>
                    <td>{ row.startDate }</td>
                    <td>{ row.dueDate }</td>
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
     * @for ProjectList
     * @method render
     * @return {JSX}
     */
    render() {
        if (this.props.projects.length === 0) {
            return null;
        }

        return (
            <div className="wrapper">
                <FlashMessage />

                { this._composeSearchBar() }

                <Table headingList={ ['id', 'client', 'type', 'start date', 'due date'] } >
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
        console.log(this.props.projects[rowIndex]);
    }


    // TODO: abstract into another component
    onSearchChange = () => {
        const searchQuery = this.refs.searchQuery.value;

        this.onSearchChangeDebounced(searchQuery);
    }

    onSearchChangeDebounced = _debounce((serachQuery) => this.onSearchQueryChange(serachQuery), SEARCH_DELAY_IN_MS)

    onSearchQueryChange = searchQuery => {
        const filteredProjectList = _filter(this.props.projects, (project) => {
            return _includes(project.client.name.toLowerCase(), searchQuery.toLowerCase());
        });

        this.setState({
            filteredProjectList
        });
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
ProjectList.displayName = 'ProjectList';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
ProjectList.propTypes = {
    /**
     * @props projects
     * @type {ProjectListType}
     * @required
     */
    projects: PropTypes.array.isRequired
};

export default ProjectList;
