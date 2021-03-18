import React, { Component } from 'react'
import Row from './Row'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name && prevProps.address !== this.props.address) {
            this.setState({
                data: [...this.state.data, { id: this.getId(), name: this.props.name, address: this.props.address }]
            })
        }
    }


    getId = () => this.state.data.reduce((a, c) => a > c?.id ? a : c?.id, 0) + 1

    render() {
        return (
            <div>
                <h1>List Data</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(x => {
                                const controller = new AbortController()

                                return <Row
                                    {...x}
                                    key={x.id}
                                    remove={() => {
                                        this.setState({
                                            data: this.state.data.filter(y => y.id !== x.id)
                                        })
                                    }}
                                    controller={controller}
                                />
                            })
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}

export default List;