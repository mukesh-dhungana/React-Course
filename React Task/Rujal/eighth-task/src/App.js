import './App.css';
import React from 'react'
import Post from './Components/Post'
import Data from './Components/Data'
import { initialState, reducer } from './useReducer'
import Button from './Components/Button';

function App() {
  const [theme, setTheme] = React.useState('light')
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [data, setData] = React.useState([])
  const [value, setValue] = React.useState('')

  const changeTheme = () => setTheme(th => th === 'light' ? 'dark' : 'light')

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => {
        const d = data.map(x => {
          return {
            id: x.id,
            name: x.title
          }
        })
        setData(d)
      })
  }

  React.useEffect(() => {
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

  const uiData = React.useMemo(() => {
    return filterData.map(x => <Data key={x.id} {...x} />)
  }, [filterData])

  return (
    <div className={`App ${theme}`}>
      <Button changeTheme={changeTheme} theme={theme} />
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
                uiData
              }
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default App;
