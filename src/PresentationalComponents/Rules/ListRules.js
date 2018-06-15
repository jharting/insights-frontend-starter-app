import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Section } from '@red-hat-insights/insights-frontend-components';

class ListRules extends Component<RouteProps<any> & Props, State> {
    render () {
        return (
            <React.Fragment>
                <Section type='content'>
                    <h1> Rule List </h1>
                </Section>
            </React.Fragment>
        );
    }
}

export default withRouter(ListRules);
