import React, { Component } from 'react';
const balance = '218 982,90';
const user = 'Никита Ласточкин';
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
                        <div className="col-12 col-sm-5 col-lg-5 somenav d-flex justify-content-md-center">
                            <nav className="navbar navbar-expand-sm navbar-dark">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Задания</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Финансы</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Компания</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Статистика</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-5 col-lg-5 d-flex justify-content-md-end someinfo">
                            <div className="information">
                                <div className="balance">Баланс <span>{balance} ₽</span></div>
                                <div className="notification"><img src="assets/ic-notifications-black-24-px.png" /> </div>
                                <div className="user"><a className="link" href="#">{user}</a></div>
                                <button class="dropdown-toggle dropdown-toggle-header" type="button" data-toggle="dropdown"></button>
                                <div className="helper"><img src="assets/ic-help-outline-24-px-copy-3.png" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}