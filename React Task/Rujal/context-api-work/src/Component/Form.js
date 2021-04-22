import React from 'react'
import { MyContext } from '../Provider'

function Form() {
    const { addBook } = React.useContext(MyContext)
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                addBook({
                    name: e.target.name.value,
                    genre: e.target.genre.value
                })
                e.target.reset()
            }}>
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="genre" placeholder="Genre" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form
