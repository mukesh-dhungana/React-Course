import React, { Component } from 'react'

class Child extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.name !== state.name && props.address !== state.address) {
            return{
                name:props.name,
                address:props.address
            }
        }else{
            return null
        }
        
    }

    render() {
        const { name, address } = this.state
        return (
            <div>
                <h1>Child</h1>
                <p>
                    {name} {address}
                </p>
            </div>
        )
    }
}

export default Child
