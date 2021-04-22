import React from 'react'
import { MyContext } from '../Provider'
import Book from './Book'

function Books() {
    const { author, books } = React.useContext(MyContext)
    return (
        <div>
            <h1>Author: {author}</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => (
                            <Book key={book.id} {...book} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Books
