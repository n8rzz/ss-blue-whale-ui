/**
 * Messaging enumeration.
 *
 * Provides a single source of truth for all messaging accross the application.
 *
 * @property MESSAGES
 * @type {Object}
 * @final
 */
export const MESSAGES = {
    CLIENT: {
        SUCCESS: {
            CREATE: 'Client created successfully.',
            SAVE: 'Client updated successfully.',
            DELETE: 'Client deleted successfully.'
        },
        ERROR: {
            INVALID_CLIENT_CREATION_TYPE: 'Invalid Client type. Form values must be a ClientCreationType',
            INVALID_CLIENT_PREVIEW_TYPE: 'Invalid Client type. Form values must be a ClientPreviewType'
        }
    },
    PROJECT_TYPE: {
        SUCCESS: {
            CREATE: 'Project Type created successfully.',
            SAVE: 'Project Type updated successfully.',
            DELETE: 'Project Type deleted successfully.'
        },
        ERROR: {
            INVALID_PROJECT_TYPE_CREATION_TYPE: 'Invalid ProjectType. Form values must be a ProjectTypeCreationType',
            INVALID_PROJECT_TYPE_TYPE: 'Invalid Project Type type. Form values must be a ProjectTypeType'
        }
    },
    TASK_ITEM: {
        SUCCESS: {
            CREATE: 'Task Item created successfully.',
            SAVE: 'TaskItem updated successfully,',
            DELETE: 'Task Item deleted successfully.'
        },
        ERROR: {
            INVALID_TASK_ITEM_CREATION_TYPE: 'Invalid TaskItem type. Form values must be a TaskItemCreationType',
            INVALID_TASK_ITEM_TYPE: 'Invalid TaskItem type. Form values must be a TaskItemType'
        }
    }
};
