import React, { Component } from 'react'

export default class Row extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: {}
        }
    }

    loadAPI = async (id) => {
        try {
            const signal = this.props.controller.signal;
            const response = await fetch('https://reqres.in/api/users/' + id + '?delay=2', {
                method: 'GET',
                signal: signal
            })
            const data = await response.json()
            this.setState({ detail: data })
        } catch {
            console.log('Error');
        }

    }

    componentWillUnmount=()=>this.props.controller.abort()

    render() {
        const { id, name, address, remove } = this.props
        console.log(this.state.detail);
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{address}</td>
                <td>
                    <button onClick={() => this.loadAPI(id)}>Load</button>
                    <button onClick={() => remove()}>Delete</button>
                </td>
            </tr>
        )
    }
}
