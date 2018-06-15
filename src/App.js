import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Routes } from './Routes';
import './App.scss';

class App extends Component {

    constructor(props) {
        super();
        this.history = props.history;
    }

    componentDidMount () {
        insights.chrome.init();
        insights.chrome.identifyApp('advisor');
        insights.chrome.navigation(buildNavigation());

        this.appNav = insights.chrome.on('APP_NAVIGATION', event => this.props.history.push(`/${event.navId}`));
        this.props.history.listen(() => insights.chrome.navigation(buildNavigation()));
    }

    componentWillUnmount () {
        this.appNav();
        this.props.history.listen();
    }

    render() {
        return (
            <Routes childProps={this.props} />
        );
    }
}

/**
 * withRouter: https://reacttraining.com/react-router/web/api/withRouter
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */
export default withRouter(connect()(App));

function buildNavigation () {
    const currentPath = 'advisor' + '/' + window.location.pathname.split('/').slice(-1)[0];
    return [{
        title: 'Sample App',
        id: 'advisor/sample'
    }, {
        title: 'Rules',
        id: 'advisor/rules'
    }].map(item => ({
        ...item,
        active: item.id === currentPath
    }));
}
