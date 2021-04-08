import React from 'react'

function Book({ id, name, genre }) {
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {genre}
            </td>
        </tr>
    )
}

export default Book
