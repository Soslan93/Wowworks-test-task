import React, { Component } from 'react';
import TaskList from '../containers/main/task-list';
import Tabs from '../containers/main/tab';
import Filter from '../containers/main/filter';

const user = "Никита Ласточкин";

export default class Main extends Component {
    
    render() {
        return (
            <div className="main">
                <div className="container container-main">
                    <div className="task-list">
                        <div className="title">Задания</div>
                        <div className="tab">
                            <Tabs />
                        </div>
                        <div className="add">
                            <button type="button" className="btn-circle">+</button>
                        </div>
                        <Filter />
                        <div className="task-list">
                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}