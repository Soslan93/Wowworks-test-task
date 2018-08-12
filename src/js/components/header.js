import React, { Component } from 'react';
import Nav from './header/nav';
import { Info } from './header/info';

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-2 col-lg-1 d-flex justify-content-md-start">
                            <h1 className="logo">taskon</h1>
                        </div>
                        <Nav />
                        <Info />
                    </div>
                </div>
            </div>
        );
    }
}