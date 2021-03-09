import React, { Component } from 'react'

export default class Row extends Component {
    render() {
        const { id, name, address } = this.props
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{address}</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        )
    }
}
