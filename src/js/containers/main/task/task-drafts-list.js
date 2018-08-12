import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

class TaskDraftList extends Component {

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
                    {this.props.draftTask.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ draftTask, filterTask, filterByType }) {
    return {
        draftTask: draftTask.filter(draftTask => draftTask.description.toLowerCase().includes(filterTask) && draftTask.type.includes(filterByType))
    };
}

export default connect(mapStateToProps)(TaskDraftList);