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
            CREATE_SUCCESS: 'Client created successfully.',
            DELETE_SUCCESS: 'Client deleted successfully.'
        },
        ERROR: {
            INVALID_CLIENT_CREATION_TYPE: 'Invalid Client type. Form values must be a ClientCreationType',
            INVALID_CLIENT_PREVIEW_TYPE: 'Invalid Client type. Form values must be a ClientPreviewType'
        }
    },
    PROJECT_TYPE: {
        SUCCESS: {
            CREATE_SUCCESS: 'Project Type created successfully.',
            DELETE_SUCCESS: 'Project Type deleted successfully.'
        },
        ERROR: {
            INVALID_PROJECT_TYPE_CREATION_TYPE: 'Invalid ProjectType. Form values must be a ProjectTypeCreationType',
            INVALID_PROJECT_TYPE_TYPE: 'Invalid Project Type type. Form values must be a ProjectTypeType'
        }
    }
};
