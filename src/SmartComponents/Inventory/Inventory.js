import React from 'react';

import { Section } from '@red-hat-insights/insights-frontend-components';
import { Tabs } from '@red-hat-insights/insights-frontend-components';
import { TabPane } from '@red-hat-insights/insights-frontend-components';

console.log('inventory loading');

export default function Inventory () {
    console.log('inventory rendering');
    return (
        <Section>
            <h1>Inventory</h1>
            <Tabs selected={0}>
                <TabPane label='Tab 1'>
                    <h2>Tab 1 Content</h2>
                </TabPane>
                <TabPane label='Tab 2'>
                    <h2>Tab 2 Content</h2>
                </TabPane>
                <TabPane label='Tab 3'>
                    <h2>Tab 3 Content</h2>
                </TabPane>
            </Tabs>
        </Section>
    );
}
