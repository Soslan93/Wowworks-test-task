import React, { Component } from 'react';
import TaskList from '../containers/main/task/task-list';
import TaskWorkList from '../containers/main/task/task-work-list';
import TaskMadeList from '../containers/main/task/task-made-list';
import TaskConsiderList from '../containers/main/task/task-consider-list';
import TaskRejectList from '../containers/main/task/task-list-rejected';
import TaskDraftList from '../containers/main/task/task-drafts-list';
import Tabs from '../containers/main/tab';
import Filter from '../containers/main/filter';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import { connect } from "react-redux";

const history = createBrowserHistory();

const user = "Никита Ласточкин";

const NewTask = () => (
    <div>
        <h2>Привет мир!</h2>
    </div>
);

class Main extends Component {

    render() {
        return (
            <BrowserRouter history={history}>
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
                                <div className="task-task">
                                    <Route exact path="/" component={TaskList} />
                                    <Route exact path="/b" component={TaskWorkList} />
                                    <Route exact path="/c" component={TaskConsiderList} />
                                    <Route exact path="/d" component={TaskMadeList} />
                                    <Route exact path="/e" component={TaskRejectList} />
                                    <Route exact path="/f" component={TaskDraftList} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps({ task }) {
    return { task };
}

export default connect(mapStateToProps)(Main);