import React from 'react'

function useTodo(initialState) {
    const [todos, setTodos] = React.useState(initialState)
    const [editMode, setEditMode] = React.useState(false)
    const [id, setId] = React.useState(null)

    return {
        todos,
        editMode,
        addTodo: (data) => setTodos(a => [...a, data]),
        deleteTodo: (id) => setTodos(a => [...a].filter(x => x.id !== id)),
        getDetail: (id) => {
            setEditMode(true)
            setId(id)
            return todos.find(x => x.id === id)
        },
        updateTodo: (name) => {
            setTodos(d => [{ id, name }, ...d.filter(x => x.id !== id)].sort((a, b) => a.id - b.id))
            setEditMode(false)
            setId(null)
        }
    }
}

export default useTodo