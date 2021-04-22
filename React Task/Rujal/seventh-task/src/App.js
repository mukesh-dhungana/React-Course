import React from 'react'
import './App.css';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    
      data.length===0 && setData([{ id: 1, name: 'Rujal', address: 'Kumarigal' }])
    
  }, [data])

  const handleSubmit = (item) => {
    item['id'] = getId()
    setData(x => [...x, item])
  }

  const getId = () => data.reduce((a, c) => a > c.id ? a : c.id, 0) + 1

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <List data={data} />
    </div>
  );
}

export default App;
