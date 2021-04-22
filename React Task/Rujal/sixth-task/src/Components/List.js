import React, { Component } from 'react'
import Row from './Row'
import PropTypes from 'prop-types';

export default class List extends Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(x => (
                        <Row key={x.id} {...x} />
                    ))}
                </tbody>
            </table>
        )
    }
}


List.propTypes = {
    data: PropTypes.array.isRequired
}

List.defaultProps = {
    data: [
        {
            id: 2,
            name: 'Name',
            address: 'Address'
        }
    ]
}