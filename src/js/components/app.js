import React, { Component } from 'react';
import { Header } from '../components/header';
import Main from '../containers/main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import OtherMain from '../containers/main/Other-main';
import history from '../history';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <div>
                    <Header />
                    <Route exact path="/" component={Main} />
                    <Route path="/:id" component={OtherMain} />
                </div>
            </BrowserRouter>
        );
    }
}