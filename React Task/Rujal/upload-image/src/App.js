import './App.css';
import { addData, getAllData, getAllDataSnapShot } from './firebaseServices/databaseService';
import React, { useEffect } from 'react'
import useStorage from './hooks/useStorage';

function App() {

  const [data, setData] = React.useState([])
  const [file, setFile] = React.useState(null);
  const [name, setName] = React.useState('')
  const { url, setUrlFile } = useStorage()

  React.useEffect(() => {
    const getData = async (table) => {
      const d = await getAllData(table)
      let user = []
      d.forEach((snap) => {
        user = [...user, { id: snap.id, ...snap.data() }]
      })
      setData(user)
    }

    const getSnapShot = async (table) => {
      getAllDataSnapShot(table, snap => {
        let user = []
        snap.forEach(x => {
          user = [...user, { id: x.id, ...x.data() }]
        })
        setData(user)
      })

    }

    getSnapShot("user")
    getData("user")

    return () => getSnapShot("user")

  }, [])

  useEffect(() => {
    if (url) {
      addData("user", { name, url })
      setUrlFile(null)
    }
  }, [url, name, setUrlFile])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrlFile(file)
    setFile(null)
    e.target.reset()
  }
  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
          <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div>

        {data.map(x => (
          <div key={x.id}>
            <div>
              {x?.name}
            </div>
            <div style={{ width: "80%", margin: "auto" }}>
              <img src={x.url} alt="" style={{ width: "40%" }} />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
