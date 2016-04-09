import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ClientList from '../../../../src/scripts/shared/content/ClientList/ClientList';

import { ValidClientList } from '../../../specHelper/fixtures/client/ClientTypes';

const props = {
    clients: ValidClientList
};

ava('ClientList component renders in DOM', t => {
    const Component = React.createElement(ClientList, props);
    const instance = shallow(Component);

    t.ok(instance);
    t.ok(instance.find('div'));
    t.ok(instance.find('ul'));
    t.ok(instance.find('li'));
    t.ok(instance.find('h2'));
});

// ava('It should have props for clients', t => {
//     const Component = React.createElement(ClientList, props);
//     const instance = shallow(Component);
//
//     console.log(instance.props().clients);
// });
