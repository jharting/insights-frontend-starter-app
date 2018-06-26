import React from 'react';

import './SystemModal.scss';
import { Section } from '@red-hat-insights/insights-frontend-components';
import { Tabs } from '@red-hat-insights/insights-frontend-components';
import { TabPane } from '@red-hat-insights/insights-frontend-components';

export default class SystemModal extends React.Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    close () {
        this.setState({open: false});
    }

    open (systemId) {
        this.setState({
            open: true,
            systemId
        });
    }

    render () {
        if (!this.state.open) {
            return null;
        }

        return (
            <div className='modal'>
                <div className='modal-content'>
                    <a className='float-right' onClick={() => this.close()}>Close</a>
                    <h1>Inventory modal</h1>
                    <dl>
                        <dt>hostname</dt>
                        <dd>{this.state.systemId}</dd>
                        <dt>system id</dt>
                        <dd>2a96856e-791f-11e8-adc0-fa7ae01bbebc</dd>
                        <dt>type</dt>
                        <dd>RHEL Box</dd>
                    </dl>

                    <Section>
                        <Tabs selected={0}>
                            <TabPane label='Advisor'>
                                <h2>Advisor Content</h2>
                            </TabPane>
                            <TabPane label='Vulnerabilities'>
                                <h2>Vulnerabilities Content</h2>
                            </TabPane>
                            <TabPane label='Compliance'>
                                <h2>Compliance Content</h2>
                            </TabPane>
                        </Tabs>
                    </Section>
                </div>
            </div>
        );
    }
}
