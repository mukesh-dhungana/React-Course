import React from 'react'
import Row from './Row'

function List({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {data.map(x => <Row key={x.id} {...x} />)}
            </tbody>
        </table>
    )
}

List.defaultProps = {
    data: [{
        id: 0,
        name: 'Random',
        address: 'Random Add'
    }]
}

List.propTypes = {
    data: function ({ data }) {
        if (!Array.isArray(data)) {
            return new Error('Prop type not valids')
        }
    }
}

export default List
