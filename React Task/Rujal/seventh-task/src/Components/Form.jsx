import React from 'react'

function Form(props) {

    const submitData = (e) => {
        e.preventDefault()
        const target = e.target
        const name = target.name.value
        const address = target.address.value
        name && address ? props.handleSubmit({ name, address }) : alert('Please provide Data')
        e.target.reset()
    }
    return (
        <form onSubmit={submitData}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="address" placeholder="Address" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
