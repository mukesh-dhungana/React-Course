import React from 'react'

function List({todos, deleteTodo, getDetail, onChange}) {
   

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
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>
                                <button onClick={async () => {
                                    const data = await getDetail(x.id)
                                    onChange(data.name)

                                }}>Edit</button>
                                <button onClick={() => deleteTodo(x.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List
