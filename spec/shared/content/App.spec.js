import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../../../src/scripts/shared/content';

const props = {
    children: []
};

ava('App root component renders in DOM', t => {
    const Component = React.createElement(App, props);
    const instance = shallow(Component);

    t.ok(instance);
    t.ok(instance.find('div'));
});
