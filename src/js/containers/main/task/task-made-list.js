import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

class TaskMadeList extends Component {

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
                    {this.props.madeTask.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ madeTask, filterTask, filterByType }) {
    return {
        madeTask: madeTask.filter(madeTask => madeTask.description.toLowerCase().includes(filterTask) && madeTask.type.includes(filterByType))
    };
}

export default connect(mapStateToProps)(TaskMadeList);