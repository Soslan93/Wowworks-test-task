import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

class TaskWorkList extends Component {

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
                    {this.props.workTask.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ workTask, filterTask, filterByType }) {
    return {
        workTask: workTask.filter(workTask => workTask.description.toLowerCase().includes(filterTask) && workTask.type.includes(filterByType))
    };
}

export default connect(mapStateToProps)(TaskWorkList);