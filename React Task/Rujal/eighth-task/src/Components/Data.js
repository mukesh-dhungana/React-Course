import React from 'react'

function Data({ id, name }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
        </tr>
    )
}

export default Data