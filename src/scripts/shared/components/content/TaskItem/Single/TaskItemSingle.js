import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { TaskItemType } from '../../../../domain/taskItem/types/TaskItemTypes';
import VerticalRhythm from '../../../repeater/VerticalRhythm/VerticalRhythm';
import Button from '../../../layout/Button/Button';

const Form = t.form.Form;

/**
 * @class TaskItemSingle
 * @extends React/Component
 */
export default class TaskItemSingle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskItemFormValues: props.taskItem
        };
    }

    /**
     * @for TaskItemSingle
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div className="wrapper">
                <VerticalRhythm increment={ 1 }>
                    <Form
                        ref="taskItemForm"
                        type={ TaskItemType }
                        value={ this.state.taskItemFormValues }
                        onChange={ this.onFormChange } />

                    <Button
                        onClick={ this.onRequestToDelete }>
                        Delete Task Item
                    </Button>

                    <Button
                        onClick={ this.onSubmit }>
                        Update Task Item
                    </Button>
                </VerticalRhythm>
            </div>
        );
    }

    /**
     * @for TaskItemSingle
     * @method onFormChange
     * @callback
     */
    onFormChange = (formValues) => {
        this.setState({ taskItemFormValues: formValues });
    };

    /**
     * @for TaskItemSingle
     * @method onRequestToDelete
     * @callback
     */
    onRequestToDelete = () => {
        this.props.onDeleteTaskItem(this.props.taskItem.id);
    }

    /**
     * @for TaskItemSingle
     * @method onSubmit
     * @callback
     */
    onSubmit = () => {
        const taskItemValues = this.refs.taskItemForm.getValue();

        if (!t.Nil.is(taskItemValues)) {
            this.props.onSaveTaskItem(this.props.taskItem.id, taskItemValues);
        }
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
    taskItem: PropTypes.object,

    /**
     * @property onSaveTaskItem
     * @type {Function}
     * @required
     */
    onSaveTaskItem: PropTypes.func.isRequired,

    /**
     * @property onDeleteTaskItem
     * @type {Function}
     * @required
     */
    onDeleteTaskItem: PropTypes.func.isRequired
};
