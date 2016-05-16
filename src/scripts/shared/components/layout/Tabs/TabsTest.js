import React, { Component } from 'react';
import Tabs from './Tabs';

export default class TabsTest extends Component {
    render() {
        return (
            <Tabs>
                <Tabs.Tab title="first">
                    First content
                </Tabs.Tab>
                <Tabs.Tab title="second">
                    Second content
                </Tabs.Tab>
                <Tabs.Tab title="third">
                    <div>
                        <h3>Third content</h3>
                    </div>
                </Tabs.Tab>
            </Tabs>
        )
    }
}
