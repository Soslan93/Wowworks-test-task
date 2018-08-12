import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

class TaskConsiderList extends Component {

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
                    {this.props.considerTask.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ considerTask, filterTask, filterByType }) {
    return {
        considerTask: considerTask.filter(considerTask => considerTask.description.toLowerCase().includes(filterTask) && considerTask.type.includes(filterByType))
    };
}

export default connect(mapStateToProps)(TaskConsiderList);