export const VALID_PROJECT_CREATION_REQUEST = {
    'startDate': 'Sat, 02 Apr 2016 23:08:04 UTC +00:00',
    'endDate': 'Sun, 03 Apr 2016 23:08:04 UTC +00:00',
    'completedDate': 'Mon, 04 Apr 2016 23:08:04 UTC +00:00',
    'client_id': 9,
    'project_type_id': 8
};

export const VALID_PROJECT_RESPONSE = {
    'id': 2,
    'startDate': '2016-04-02T23:08:04.000Z',
    'completedDate': '2016-04-04T23:08:04.000Z',
    'dueDate': null,
    'client': {
        'id': 9,
        'name': 'Closets, Closets, Closets, Closets',
        'address_1': null,
        'address_2': null,
        'city': null,
        'state': null,
        'zip': null,
        'fax': null,
        'phone': null,
        'email': null,
        'website': null,
        'entity': null,
        'joinDate': '2016-05-08T23:58:27.906Z',
        'status': 'Active'
    },
    'project_type': {
        'id': 8,
        'name': 'Monthly Payroll',
        'description': 'Monthly Payroll',
        'dueDate': '2016-06-30'
    },
    'time_entries': [
        {
            'id': 1,
            'startTime': '2016-04-23T22:55:34.000Z',
            'endTime': '2016-04-23T23:55:34.000Z',
            'duration': 60
        }
    ],
    'notes': [
        {
            'id': 21,
            'content': 'Grooving slowly',
            'notable_id': 2,
            'created_at': '2016-06-13T06:43:36.037Z'
        }
    ]
};
