import React, { Component, PropTypes } from 'react';
import t from 'tcomb-form';
import { TaskItemCreationType } from '../../../../domain/taskItem/types/TaskItemTypes';
import Button from '../../../layout/Button/Button';

const Form = t.form.Form;

const FORM_OPTIONS = {
    fields: {
        id: {
            type: 'hidden'
        },
        startDate: {
            type: 'date'
        },
        endDate: {
            type: 'date'
        }
    }
};

/**
 * @class TaskItemCreate
 */
export default class TaskItemCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createTaskItemFormValues: null
        };
    }

    /**
     * @method render
     * @for TaskItemCreate
     * @return {[type]} [description]
     */
    render() {
        return (
            <div className="wrapper">
                <Form
                    ref="createTaskItemForm"
                    options={ FORM_OPTIONS }
                    type={ TaskItemCreationType }
                    value={ this.state.createTaskItemFormValues }
                    onChange={ this.onChange } />

                <Button onClick={ this.onSubmit }>
                    Create Task
                </Button>
            </div>
        );
    }

    /**
     * @method onChange
     * @callback
     */
    onChange = formValues => {
        this.setState({ createTaskItemFormValues: formValues });
    };

    /**
     * @method onSubmit
     * @return {function}
     * @callback
     */
    onSubmit = () => {
        const taskItemFormValues = this.refs.createTaskItemForm.getValue();

        if (!t.Nil.is(taskItemFormValues)) {
            this.props.onCreateTaskItem(taskItemFormValues);
        }
    };

}

/**
 * @property displayName
 * @type {Static}
 * @static
 */
TaskItemCreate.displayName = 'TaskItemCreate';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
TaskItemCreate.propTypes = {
    /**
     * @property onCreateTaskItem
     * @type {Function}
     * @required
     */
    onCreateTaskItem: PropTypes.func.isRequired
};
