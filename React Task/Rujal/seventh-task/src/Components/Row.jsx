import React from 'react'

function Row({ id, name, address }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{address}</td>
        </tr>
    )
}

export default Row
