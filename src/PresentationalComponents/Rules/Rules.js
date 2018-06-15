import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';

const ListRules = asyncComponent(() => import(/* webpackChunkName: "ListRules" */ './ListRules'));
const ViewRule = asyncComponent(() => import(/* webpackChunkName: "ListRules" */ './ViewRule'));

export default (props) => {
    return (
        <React.Fragment>
            <h1>Rules</h1>
            <Switch>
                <Route exact path='/advisor/rules' component={ListRules} />
                <Route path='/advisor/rules/:id' component={ViewRule} />
            </Switch>
        </React.Fragment>
    );
}
