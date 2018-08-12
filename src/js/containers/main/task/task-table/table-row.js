import React from 'react';

export const TableRow = ({ task }) => {
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