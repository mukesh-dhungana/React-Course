import React from 'react'
import Info from './Info'

function List({ todos, deleteTodo, getDetail, onChange }) {


    return (
        <div className="list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(x => (
                        <Info
                            key={x.id}
                            x={x}
                            getDetail={getDetail}
                            deleteTodo={deleteTodo}
                            onChange={onChange}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List
