import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink  } from 'react-router-dom';

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.isActivePage = this.isActivePage.bind(this);
    }

    isActivePage(path) {
        return window.location.pathname === path
    }
    render() {
        return (
            <ul className="tabs">
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link"  activeClassName="nav-link-active" to="/" isActive={() => this.isActivePage('/')} >Новые <span class="badge badge-pill badge-light">{this.props.task.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/work" isActive={() => this.isActivePage('/work')} >В работе <span class="badge badge-pill badge-active">{this.props.workTask.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/consider" isActive={() => this.isActivePage('/consider')} >На рассмотрении <span class="badge badge-pill badge-light">{this.props.madeTask.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/made" isActive={() => this.isActivePage('/made')} >Выполнены <span class="badge badge-pill badge-light">{this.props.considerTask.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/reject" isActive={() => this.isActivePage('/reject')} >Отменены <span class="badge badge-pill badge-light">{this.props.rejectTask.length}</span></NavLink >
                </li>
                <li className="nav-item nav-item-main">
                    <NavLink className="nav-link" activeClassName="nav-link-active" to="/draft" isActive={() => this.isActivePage('/draft')} >Черновики <span class="badge badge-pill badge-light">{this.props.draftTask.length}</span></NavLink >
                </li>
            </ul>
        );
    }
}

function mapStateToProps({ task, workTask, madeTask, considerTask, rejectTask, draftTask }) {
    return { task, workTask, madeTask, considerTask, rejectTask, draftTask };
}

export default connect(mapStateToProps, null, null, { pure: false })(Tabs);