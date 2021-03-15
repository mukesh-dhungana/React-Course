import {useState} from 'react'

import Form from './components/Form'
import './components/Form.css'
import FormDisplay from './components/FormDisplay'

function App() {

  const [users, setUsers] =useState([])

  const addUser = (user) => {
    console.log(user);
    setUsers([...users, user])
  }

  return (
    <div className="app-container">
      <Form onSubmit={addUser} />
      <FormDisplay users={users} />
      {/* {users.length > 0 ? <FormDisplay users={users} /> : 'No Data to Show'} */}
    </div>
  );
}

export default App;
