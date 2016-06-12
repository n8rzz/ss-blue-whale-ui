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
    }
};
