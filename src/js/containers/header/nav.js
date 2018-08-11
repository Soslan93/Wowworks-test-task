import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
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
        );
    }

}