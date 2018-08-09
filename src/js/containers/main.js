import React, { Component } from 'react';
const user = "Никита Ласточкин";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    render() {
        return (
            <div className="main">
                <div className="container container-main">
                    <div className="task-list">
                        <div className="title">Задания</div>
                        <div className="tab">
                            <ul className="tabs">
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link nav-link-active" data-toggle="" href="#home">Новые <span class="badge">5</span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link" data-toggle="tab" href="#menu1">В работе <span class="badge">5</span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link" data-toggle="tab" href="#menu2">На рассмотрении <span class="badge">5</span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link" data-toggle="tab" href="#menu2">Выполнены <span class="badge">5</span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link" data-toggle="tab" href="#menu2">Отменены <span class="badge">5</span></a>
                                </li>
                                <li className="nav-item nav-item-main">
                                    <a className="nav-link" data-toggle="tab" href="#menu2">Черновики <span class="badge">5</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="add">
                            <button type="button" className="btn-circle">+</button>
                        </div>
                        <div className="filter">
                            <div className="form-group">
                                <input
                                    placeholder="Поиск по слову"
                                    className="word-search"
                                    value={this.state.term}
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="check">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">Персональное</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">Ночное</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">Срочное</label>
                                </div>
                            </div>
                            <div className="userName">{user}</div>
                            <button class="dropdown-toggle" type="button" data-toggle="dropdown"></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}