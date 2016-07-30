export const VALID_PROJECT_CREATION_REQUEST = {
    'startDate': 'Sat, 02 Apr 2016 23:08:04 UTC +00:00',
    'endDate': 'Sun, 03 Apr 2016 23:08:04 UTC +00:00',
    'completedDate': 'Mon, 04 Apr 2016 23:08:04 UTC +00:00',
    'status': 'Active',
    'isRecurring': true,
    'leadTimeDays': 5,
    'client_id': 9,
    'project_type_id': 8
};

export const VALID_PROJECT_RESPONSE = {
    'id': 2,
    'startDate': '2016-04-02T23:08:04.000Z',
    'completedDate': '2016-04-04T23:08:04.000Z',
    'status': 'Active',
    'isRecurring': true,
    'leadTimeDays': 5,
    'dueDate': null,
    'client': {
        'id': 9,
        'name': 'Closets, Closets, Closets, Closets',
        'entity': 'S-Corp',
        'address_1': null,
        'address_2': null,
        'city': null,
        'state': null,
        'zip': null,
        'fax': null,
        'phone': null,
        'email': null,
        'website': null,
        'joinDate': '2016-05-08T23:58:27.906Z',
        'status': 'Active'
    },
    'project_type': {
        'id': 8,
        'name': 'Monthly Payroll',
        'description': 'Monthly Payroll',
        'repeatWhenComplete': true,
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

export const VALID_PROJECT_LIST_RESPONSE = [
    {
        'id': 1,
        'startDate': '2016-04-02T23:08:04.000Z',
        'completedDate': '2016-04-04T23:08:04.000Z',
        'dueDate': null,
        'status': 'Active',
        'isRecurring': true,
        'leadTimeDays': 5,
        'client': {
            'id': 1,
            'name': 'Leonie Kling',
            'entity': 'S-Corp',
            'address_1': '745 Wiza Gardens',
            'address_2': 'Suite 877',
            'city': 'Gislasonton',
            'state': 'OH',
            'zip': '34243',
            'fax': '347-779-6304 x60554',
            'phone': '693.408.9026',
            'email': 'juston@willms.org',
            'website': 'orn.name',
            'joinDate': '2013-04-29T04:37:14.729Z',
            'status': 'Active'
        },
        'project_type': {
            'id': 1,
            'name': 'eum',
            'description': 'Qui est voluptates voluptatem.',
            'repeatWhenComplete': true,
            'dueDate': '2016-03-26'
        }
    },
    {
        'id': 2,
        'startDate': '2016-04-02T23:08:04.000Z',
        'completedDate': '2016-04-04T23:08:04.000Z',
        'dueDate': null,
        'client': {
            'id': 9,
            'name': 'Closets, Closets, Closets, Closets',
            'entity': 'S-Corp',
            'address_1': null,
            'address_2': null,
            'city': null,
            'state': null,
            'zip': null,
            'fax': null,
            'phone': null,
            'email': null,
            'website': null,
            'joinDate': '2016-05-08T23:58:27.906Z',
            'status': 'Active'
        },
        'project_type': {
            'id': 8,
            'name': 'Monthly Payroll',
            'description': 'Monthly Payroll',
            'repeatWhenComplete': true,
            'dueDate': '2016-06-30'
        }
    }
];
