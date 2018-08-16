import React, { Component } from 'react';
import TaskList from './task/Task-list';
import Tabs from './Tab';
import Filter from './Filter';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchTaskData } from "../../actions/index";
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import history from '../../history';

const user = "Никита Ласточкин";

class Main extends Component {

    componentWillMount() {
        this.props.fetchTaskData();
    }

    render() {
        if (!this.props.task) {
            return (
                <div>Loading...</div>
            );
        }
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
                                    <Route path="/:id" component={TaskList} />
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

    return {
        task
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTaskData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Main);
