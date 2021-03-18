import React from 'react'

function Info({ x, getDetail, deleteTodo, onChange }) {
    return (
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
    )
}

export default Info