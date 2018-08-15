import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    

    isActivePage = (path) => window.location.pathname === path;
    

    render() {
        return (
            <div className="col-12 col-sm-5 col-lg-5 somenav d-flex justify-content-md-center">
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link nav-linkheader" activeClassName="nav-linkheader-active" isActive={() => this.isActivePage('/')} to="/" >Задания</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-linkheader-active" className="nav-link nav-linkheader" isActive={() => this.isActivePage('/finance')} to="/finance" >Финансы</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-linkheader-active" className="nav-link nav-linkheader" isActive={() => this.isActivePage('/company')} to="/company" >Компания</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-linkheader-active" className="nav-link nav-linkheader" isActive={() => this.isActivePage('/statistic')} to="/statistic">Статистика</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

}