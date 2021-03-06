import React, { Component } from 'react';
import { Alert } from '@red-hat-insights/insights-frontend-components';
import { withRouter } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';
import './sample-page.scss';
import { Card } from '@red-hat-insights/insights-frontend-components';
import { CardContent } from '@red-hat-insights/insights-frontend-components';
import { CardFooter } from '@red-hat-insights/insights-frontend-components';
import { CardHeader } from '@red-hat-insights/insights-frontend-components';
import { PageHeader } from '@red-hat-insights/insights-frontend-components';
import { PageHeaderTitle } from '@red-hat-insights/insights-frontend-components';
import { Section } from '@red-hat-insights/insights-frontend-components';
import { Tabs } from '@red-hat-insights/insights-frontend-components';
import { TabPane } from '@red-hat-insights/insights-frontend-components';

import { Button } from '@patternfly/react-core';

const SampleComponent = asyncComponent(() => import('../../PresentationalComponents/SampleComponent/sample-component'));

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
class SamplePage extends Component {

    render() {
        return (
            <React.Fragment>
                <Alert type='info'> This is a template for you to build your Insights app</Alert>
                <PageHeader>
                    <PageHeaderTitle>Sample Insights App</PageHeaderTitle>
                </PageHeader>
                <Section type='content'>
                    <h1> Sample Component </h1>
                    <SampleComponent> Sample Component </SampleComponent>
                    <h1> Cards </h1>
                    <Card>
                        <CardHeader> Card Header </CardHeader>
                        <CardContent> Card Content </CardContent>
                        <CardFooter> Card Footer </CardFooter>
                    </Card>
                    <h1> Buttons </h1>
                    <Section type='button-group'>
                        <Button variant='primary'> PF-Next Primary Button </Button>
                        <Button variant='secondary'> PF-Next Secondary Button </Button>
                        <Button variant='tertiary'> PF-Next Tertiary Button </Button>
                        <Button variant='danger'> PF-Next Danger Button </Button>
                    </Section>
                    <Section>
                        <Tabs selected={0}>
                            <TabPane label='Tab 1'>
                                <br/>
                                <h2>Tab 1 Content</h2>
                                <br/>
                                <p>
                                    Lorem ipsum dolor sit amet, enim purto id mel. Purto omnes definiebas et mei, recusabo
                                    salutatus ad mei. An nec tamquam quaeque rationibus, legere probatus in mel. Etiam aeterno
                                    scriptorem ex sea, pri ad odio soluta maiorum. Pro ad invidunt reprimique, movet luptatum
                                    sit cu, in reque vocibus assueverit sit. Eum te quando dolore, sea zril dicunt torquatos ei.
                                </p>
                                <br/>
                                <p>
                                    Eu tempor aliquam recusabo vis, sint singulis nec cu. Case nonumes efficiantur duo ei. Rebum
                                    rationibus complectitur pri ne, no mazim officiis usu, saepe feugait perpetua ex eam. Sed ne
                                    timeam albucius, errem graece dicunt sea in.
                                </p>
                            </TabPane>
                            <TabPane label='Tab 2'>
                                <br/>
                                <h3>Tab 2 Content</h3>
                                <br/>
                                <p>
                                    Sit etiam nostrud posidonium at, mucius eleifend ius te. Ius et populo laboramus, pri cu
                                    discere oportere consequat. Sed an vidisse feugiat, eu sed elit choro iudicabit. Vix ad unum
                                    aliquando. Ut qui odio novum necessitatibus, nam an sint assum. Id probo molestiae eum, ei
                                    cum virtute impedit imperdiet. Eu vim aliquam veritus, justo explicari vix no.
                                </p>
                                <br/>
                                <p>
                                    Eu dignissim scribentur nam, usu possim consulatu forensibus in. Similique posidonium ex mel.
                                    Homero labore molestiae te quo, an duo nostro sanctus fabellas. Duo novum omnes splendide ex,
                                    has no albucius efficiantur, nam ei possit ocurreret.
                                </p>
                            </TabPane>
                            <TabPane disabled='true' label='Tab 3'>
                                <br/>
                                <h3>Tab 3 Content</h3>
                            </TabPane>
                        </Tabs>
                    </Section>
                </Section>
            </React.Fragment>
        );
    }
}

export default withRouter(SamplePage);
