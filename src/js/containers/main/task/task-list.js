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

function mapStateToProps({ task, filterTask, filterPersonal, filterNight, filterUrgent }, ownProps) {
    let id = ownProps.match.params.id;
    let list = !id ? task["new"] : task[`${id}`];
    return {
        task: list
        .filter(task => task.description.toLowerCase().includes(filterTask))
        .filter(task => filterPersonal ? task.personal : task)
        .filter(task => filterNight ? task.night : task)
        .filter(task => filterUrgent ? task.urgent : task)
        
        
       // task: _.filter(list, 'urgent')
    };
}

export default connect(mapStateToProps)(TaskList);