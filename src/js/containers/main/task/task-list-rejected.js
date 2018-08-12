import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

class TaskRejectList extends Component {
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
                    {this.props.rejectTask.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ rejectTask, filterTask, filterByType }) {
    return {
        rejectTask: rejectTask.filter(rejectTask => rejectTask.description.toLowerCase().includes(filterTask) && rejectTask.type.includes(filterByType))
    };
}

export default connect(mapStateToProps)(TaskRejectList);