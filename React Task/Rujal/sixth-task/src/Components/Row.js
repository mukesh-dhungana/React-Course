import React, { Component } from 'react'

export default class Row extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.address}</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        )
    }
}
