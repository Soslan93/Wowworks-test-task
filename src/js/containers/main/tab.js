import React, { Component } from 'react';
import { connect } from "react-redux";

class Tabs extends Component {

    render() {
        return (
            <ul className="tabs">
                <li className="nav-item nav-item-main">
                    <a className="nav-link nav-link-active" data-toggle="" href="#home">Новые <span class="badge badge-pill badge-light">{this.props.task.length}</span></a>
                </li>
                <li className="nav-item nav-item-main">
                    <a className="nav-link" data-toggle="tab" href="#menu1">В работе <span class="badge badge-pill badge-active">{this.props.task.length}</span></a>
                </li>
                <li className="nav-item nav-item-main">
                    <a className="nav-link" data-toggle="tab" href="#menu2">На рассмотрении <span class="badge badge-pill badge-light">{this.props.task.length}</span></a>
                </li>
                <li className="nav-item nav-item-main">
                    <a className="nav-link" data-toggle="tab" href="#menu2">Выполнены <span class="badge badge-pill badge-light">{this.props.task.length}</span></a>
                </li>
                <li className="nav-item nav-item-main">
                    <a className="nav-link" data-toggle="tab" href="#menu2">Отменены <span class="badge badge-pill badge-light">{this.props.task.length}</span></a>
                </li>
                <li className="nav-item nav-item-main">
                    <a className="nav-link" data-toggle="tab" href="#menu2">Черновики <span class="badge badge-pill badge-light">{this.props.task.length}</span></a>
                </li>
            </ul>
        );
    }
}
function mapStateToProps({ task }) {
    return { task };
}

export default connect(mapStateToProps)(Tabs);