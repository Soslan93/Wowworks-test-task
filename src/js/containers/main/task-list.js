import React, { Component } from "react";
import { connect } from "react-redux";

class TaskList extends Component {

    renderTask(task) {
        return (
            <tr className="taskItem" key={task.id}>
                <td className="task">{task.id}</td>
                <td className="task">{task.city}</td>
                <td className="task">{task.description}</td>
                <td className="task">{task.deadline}</td>
                <td className="task">{task.sum}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="task">ID</th>
                        <th className="task">Город</th>
                        <th className="task">Название</th>
                        <th className="task">Выполнить до</th>
                        <th className="task">Сумма</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.task.map(this.renderTask)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ task }) {
    return { task };
}

export default connect(mapStateToProps)(TaskList);