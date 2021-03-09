import React, { Component } from 'react'

export default class Form extends Component {
    submitData = (e) => {
        e.preventDefault()
        const target = e.target
        if (target.name.value && target.address.value) {
            this.props.handleSubmit({name: target.name.value, address: target.address.value })
        } else {
            alert('Please Provide data')
        }
        e.target.reset()
    }


    render() {
        return (
            <form onSubmit={this.submitData}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="address" placeholder="Address" />
                <input type="submit" value="submit" />
            </form>
        )
    }
}
