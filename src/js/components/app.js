import React, { Component } from 'react';
import Header from '../components/header';
import Main from '../components/main';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Finance, Company, Statistic } from '../containers/main/other-main';

const history = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <div>
                    <Header />
                    <Route exact path="/" component={Main} />
                    <Route exact path="/finance" component={Finance} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/statistic" component={Statistic} />
                </div>
            </BrowserRouter>
        );
    }
}