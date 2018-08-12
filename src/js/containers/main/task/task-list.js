import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

class TaskList extends Component {
    /**
    * Render a list of task
    * @param {Array} task - The list of the task.
    */
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

function mapStateToProps({ task, filterTask, filterByType }) {
    return {
        task: task.filter(task => task.description.toLowerCase().includes(filterTask) && task.type.includes(filterByType))
    };
}

export default connect(mapStateToProps)(TaskList);