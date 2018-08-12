import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Tabs extends Component {

    constructor(props) {
        super(props);

        this.changeActiveTab = this.changeActiveTab.bind(this);
    }
    // меняем активный таб
    changeActiveTab(event) {

        let activeTab;
        activeTab = document.querySelector(".nav-link-active").classList;
        activeTab.remove("nav-link-active");

        event.target.classList.add("nav-link-active");
    }

    render() {
        return (
            <ul className="tabs">
                <li className="nav-item nav-item-main" onClick={this.changeActiveTab}>
                    <Link className="nav-link nav-link-active new-task" to="/" >Новые <span class="badge badge-pill badge-light">{this.props.task.length}</span></Link>
                </li>
                <li className="nav-item nav-item-main" onClick={this.changeActiveTab}>
                    <Link className="nav-link task-inthework" to="/b" >В работе <span class="badge badge-pill badge-active">{this.props.workTask.length}</span></Link>
                </li>
                <li className="nav-item nav-item-main" onClick={this.changeActiveTab}>
                    <Link className="nav-link task-consideration" to="/c" >На рассмотрении <span class="badge badge-pill badge-light">{this.props.madeTask.length}</span></Link>
                </li>
                <li className="nav-item nav-item-main" onClick={this.changeActiveTab}>
                    <Link className="nav-link task-made" to="/d" >Выполнены <span class="badge badge-pill badge-light">{this.props.considerTask.length}</span></Link>
                </li>
                <li className="nav-item nav-item-main" onClick={this.changeActiveTab}>
                    <Link className="nav-link task-rejected" to="/e" >Отменены <span class="badge badge-pill badge-light">{this.props.rejectTask.length}</span></Link>
                </li>
                <li className="nav-item nav-item-main" onClick={this.changeActiveTab}>
                    <Link className="nav-link task-drafts" to="/f" >Черновики <span class="badge badge-pill badge-light">{this.props.draftTask.length}</span></Link>
                </li>
            </ul>
        );
    }
}

function mapStateToProps({ task, workTask, madeTask, considerTask, rejectTask, draftTask }) {
    return { task, workTask, madeTask, considerTask, rejectTask, draftTask };
}

export default connect(mapStateToProps)(Tabs);