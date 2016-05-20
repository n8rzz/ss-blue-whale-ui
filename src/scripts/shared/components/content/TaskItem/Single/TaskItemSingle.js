import React, { Component, PropTypes } from 'react';
// import t from 'tcomb-form';
// import TaskItemType from '../../../../domain/taskItem/types/TaskItemTypes';
import Button from '../../../layout/Button/Button';

// const Form = t.form.Form;

/**
 * @class TaskItemSingle
 * @extends React/Component
 */
export default class TaskItemSingle extends Component {
    /**
     * @for TaskItemSingle
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="wrapper">
                <ul>
                    <li>ID: { this.props.taskItem.id }</li>
                    <li>Name: { this.props.taskItem.name }</li>
                    <li>Description: { this.props.taskItem.description }</li>
                    <li>Start Date: { this.props.taskItem.startDate }</li>
                    <li>End Date: { this.props.taskItem.endDate }</li>
                    <li>Sort Order: { this.props.taskItem.sortOrder }</li>
                </ul>


                <Button>Add Task Item</Button>
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
TaskItemSingle.displayName = 'TaskItemSingle';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
TaskItemSingle.propTypes = {
    /**
     * @property
     * @type {Object}
     */
    taskItem: PropTypes.object
};
