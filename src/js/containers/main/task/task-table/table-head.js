import React from "react";

export const TableHead = () => {
    return (
        <thead>
            <tr>
                <th className="task">ID</th>
                <th className="task">Город</th>
                <th className="task">Название</th>
                <th className="task">Выполнить до</th>
                <th className="task">Сумма</th>
            </tr>
        </thead>
    );
}