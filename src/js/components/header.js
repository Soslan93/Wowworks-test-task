import React, { Component } from 'react';
import Nav from './header/Nav';
import { Info } from './header/Info';

export const Header = () => {
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