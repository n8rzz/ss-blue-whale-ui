import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ClientContainer from '../../../../src/scripts/shared/container/client/ClientContainer';

const props = {};

ava('ClientContainer component renders in DOM', t => {
    const Component = React.createElement(ClientContainer, props);
    const instance = shallow(Component);

    t.ok(instance);
    t.ok(instance.find('div'));
});
