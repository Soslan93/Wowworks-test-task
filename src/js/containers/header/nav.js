import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    constructor(props) {
        super(props);

        this.changeActivenav = this.changeActivenav.bind(this);
    }
    
    changeActivenav(event) {

        let active;
        active = document.querySelector(".nav-linkheader-active").classList;
        active.remove("nav-linkheader-active");
       
        event.target.classList.add("nav-linkheader-active");
    }

    render() {
        return (
            <div className="col-12 col-sm-5 col-lg-5 somenav d-flex justify-content-md-center">
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={this.changeActivenav} >
                            <Link className="nav-link nav-linkheader nav-linkheader-active" to="/" >Задания</Link>
                        </li>
                        <li className="nav-item" onClick={this.changeActivenav} >
                            <Link className="nav-link nav-linkheader" to="/finance" >Финансы</Link>
                        </li>
                        <li className="nav-item"  onClick={this.changeActivenav}>
                            <Link className="nav-link nav-linkheader" to="/company" >Компания</Link>
                        </li>
                        <li className="nav-item" onClick={this.changeActivenav}>
                            <Link className="nav-link nav-linkheader" to="/statistic">Статистика</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

}