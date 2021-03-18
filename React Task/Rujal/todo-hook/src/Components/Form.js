import React from 'react'

function Form({ getId, value, editMode, addTodo, updateTodo, reset, onChange }) {


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (value) {
                if (!editMode) {
                    addTodo({ id: getId(), name:value })
            } else {
                updateTodo(value)
            }
            reset();
        }
        }}
        >
            <input type="text" name="name" onChange={(e) => onChange(e.target.value)} value={value} />
            <input type="submit" value="Submit" />
        </form >
    )
}

export default Form
