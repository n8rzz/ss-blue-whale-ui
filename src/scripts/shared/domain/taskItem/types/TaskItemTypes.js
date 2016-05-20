import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';

/**
 * TaskItemCreationType definition
 *
 * @type TaskItemCreationType
 * @return {TaskItemCreationType}
 */
export const TaskItemCreationType = t.struct({
    name: t.String,
    description: t.String,
    sortOrder: t.maybe(t.Number)
}, 'TaskItemCreationType');

/**
 * TaskItemType definition
 *
 * @type TaskItemType
 * @return {TaskItemType}
 */
export const TaskItemType = TaskItemCreationType.extend({
    id: t.Number,
    startDate: t.maybe(t.String),
    endDate: t.maybe(t.String)
}, 'TaskItemType');

/**
 * TaskItemListType definition
 *
 * @type TaskItemListType
 * @return {TaskItemListType}
 */
export const TaskItemListType = t.list(TaskItemType, 'TaskItemListType');

/**
 * TaskItemListStateType used in the `TaskItemListReducer`
 *
 * @extends BaseStateType
 * @return {TaskItemListStateType}
 */
export const TaskItemListStateType = BaseStateType.extend({
    payload: t.maybe(TaskItemListType)
}, 'TaskItemListStateType');


export const TaskItemStateType = BaseStateType.extend({
    payload: t.maybe(TaskItemType)
}, 'TaskItemStateType');
