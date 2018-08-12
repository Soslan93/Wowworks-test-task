import React, { Component } from "react";
import { connect } from "react-redux";
import { TableHead } from "./task-table/table-head";
import { TableRow } from "./task-table/table-row";

class TaskConsiderList extends Component {

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
                    {/*отобразим наш массив объектов в таблице*/}
                    {this.props.considerTask.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

// осуществляем чтение состояния, все что возвратится будет доступно внутри компоненты (props), 
// а также осуществляем фильтрацию данных
function mapStateToProps({ considerTask, filterTask, filterByType }) {
    return {
        considerTask: considerTask.filter(considerTask => considerTask.description.toLowerCase().includes(filterTask) && considerTask.type.includes(filterByType))
    };
}
// Связываем компоненту TaskConsiderList с Redux store
export default connect(mapStateToProps)(TaskConsiderList);