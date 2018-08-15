import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

import _ from "lodash";
class TaskList extends Component {

    renderTask(task) {
        return (
            <TableRow task={task} />
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <TableHead />
                <tbody>
                    {this.props.task.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ task, filterTask, filterByType }, ownProps) {
    let id = ownProps.match.params.id;
    let list = !id ? task["new"] : task[`${id}`];
    return {
        task: list.filter(task => task.description.toLowerCase().includes(filterTask))
    };
}

export default connect(mapStateToProps)(TaskList);