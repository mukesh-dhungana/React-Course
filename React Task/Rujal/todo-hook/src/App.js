import React from 'react'
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import useTodo from './Hooks/useTodo';
import useValue from './Hooks/useValue';

function App() {
  const { todos, editMode, addTodo, deleteTodo, getDetail, updateTodo } = useTodo([])
  const { value, onChange, reset } = useValue('')
  const getId = () => todos.reduce((a, c) => a > c.id ? a : c.id, 0) + 1

  return (
    <div className="App">

      <Form
        value={value}
        editMode={editMode}
        addTodo={addTodo}
        updateTodo={updateTodo}
        reset={reset}
        onChange={onChange}
        getId={getId}
      />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        getDetail={getDetail}
        onChange={onChange}
      />
    </div >
  );
}

export default App;
