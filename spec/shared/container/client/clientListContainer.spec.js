import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { ClientListContainer } from '../../../../src/scripts/shared/container/client/ClientListContainer';

const props = {};

ava('ClientListContainer component renders in DOM', t => {
    const Component = React.createElement(ClientListContainer, props);
    const instance = shallow(Component);

    t.ok(instance);
    t.ok(instance.find('div'));
});
