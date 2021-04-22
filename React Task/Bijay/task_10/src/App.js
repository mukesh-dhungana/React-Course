
import { useEffect, useState } from 'react';
import './App.css';
import Ui from './Ui';
import {store} from './Reducer'

const App = () => {
  
  const [showTable, setShowTable] = useState(false)

  const handleFetch = () => {
    console.log('API Fetched');
    const data = fetchData().then(data => data);
    console.log(data);
    setShowTable(true);
    setTimeout(()=> {
      setShowTable(false)
    },10000)
  }

  const fetchData = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    console.log(data);
    return data
  }

  useEffect(() => {
    console.log('Use Effect');
  },[showTable])


  return (
    <div className="App">
      <h2>USE OF REDUCER</h2>
      <button onClick={handleFetch} >FETCH USER</button>
      {showTable && <Ui />}
    </div>
  );
}

export default App;
