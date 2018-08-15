import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

class Tabs extends Component {

    isActivePage = (path) => window.location.pathname === path;

    render() {
        return (
            <ul className="tabs">
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/" isActive={() => this.isActivePage('/')} >Новые <span class="badge badge-pill badge-light">{this.props.task.new.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/work" isActive={() => this.isActivePage('/work')} >В работе <span class="badge badge-pill badge-active">{this.props.task.work.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/consider" isActive={() => this.isActivePage('/consider')} >На рассмотрении <span class="badge badge-pill badge-light">{this.props.task.consider.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/made" isActive={() => this.isActivePage('/made')} >Выполнены <span class="badge badge-pill badge-light">{this.props.task.made.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/reject" isActive={() => this.isActivePage('/reject')} >Отменены <span class="badge badge-pill badge-light">{this.props.task.reject.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/draft" isActive={() => this.isActivePage('/draft')} >Черновики <span class="badge badge-pill badge-light">{this.props.task.draft.length}</span></NavLink >
                </li>
            </ul>
        );
    }
}

function mapStateToProps({ task }) {
    return { task }
}

export default connect(mapStateToProps, null, null, { pure: false })(Tabs);