import React from 'react'

export const MyContext = React.createContext()

export default class Provider extends React.Component {
    state = {
        author: "Sharon Lechter",
        books: [
            {
                id: 1,
                name: "The Good Old Days",
                genre: "Drama"
            },
            {
                id: 2,
                name: "	A Dog's Way Home",
                genre: "Comedy"
            },
            {
                id: 3,
                name: "The Star Outside My Window",
                genre: "Thriller"
            },
            {
                id: 4,
                name: "Nowhere Wild",
                genre: "Adventure"
            },
            {
                id: 5,
                name: "Time Travelling with a Hamster",
                genre: "Sci-fi"
            },
        ]
    }

    addBook = (book) => {
        const getId = () => this.state.books.reduce((a, c) => a > c.id ? a : c.id, 0) + 1
        this.setState({
            books: [{ id: getId(), ...book }, ...this.state.books]
        })
    }

    render() {
        const { addBook } = this
        return (
            <MyContext.Provider value={{
                ...this.state,
                addBook

            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}