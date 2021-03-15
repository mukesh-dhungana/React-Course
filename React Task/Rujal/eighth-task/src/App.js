import './App.css';
import React from 'react'
import Post from './Components/Post'
import Data from './Components/Data'

import { initialState, reducer } from './useReducer'
function App() {
  const [theme, setTheme] = React.useState('light')
  const [checkedButton, setCheck] = React.useState(false)
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [data, setData] = React.useState([])
  const [value, setValue] = React.useState('')
  const changeTheme = (e) => {
    const checked = e.target.checked
    setTheme(th => th === 'light' ? 'dark' : 'light')
    setCheck(checked)
  }

  React.useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => setData(data))
    }
    fetchData()
  }, [])



  const filterData = React.useMemo(() => {
    if (value.length >= 3) {
      const regex = new RegExp(value, "gi")
      return data.filter(x => x.name.match(regex))
    } else {
      return data
    }
  }, [value, data])

  return (
    <div className={`App ${theme}`}>
      <div className="switches">
        <label className="switch">
          <input type="checkbox" onChange={changeTheme} checked={checkedButton} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="posts">
        {
          state.posts.map(x => (
            <Post key={x.id} {...x} dispatch={dispatch} />
          ))
        }
      </div>

      <div className="users">
        <div>
          <input type="text" placeholder="Search" onChange={(e) => setValue(e.target.value)} />
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {
                filterData.map(x => <Data key={x.id} {...x} />)
              }
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default App;
