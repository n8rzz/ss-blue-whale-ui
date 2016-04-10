import t from 'tcomb';
import { BaseStateType } from '../../BaseTypes';

/**
 * TaskItemType definition
 *
 * @type TaskItemType
 * @return {TaskItemType}
 */
export const TaskItemType = t.struct({
    id: t.Number,
    name: t.String,
    description: t.String,
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
