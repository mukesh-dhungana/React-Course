import React from 'react'
import './App.css';
import useTheme from './useTheme'

function App() {

  const refItem = React.useRef(null)
  const [size, setSize] = React.useState(2)

  const changeHeader = () => refItem.current.style.color = "red"

  React.useEffect(() => {
    refItem.current.addEventListener('mouseenter', insideMouse)
    refItem.current.addEventListener('mouseleave', outsideMouse)
  }, [])

  const { changeTheme } = useTheme("app")
  const outsideMouse = () => setSize(2)
  const insideMouse = () => setSize(3)

  return (
    <div className="App" id="app">
      <input type="checkbox" onChange={changeTheme} />
      <h1
        ref={refItem}
        style={{ fontSize: `${size}rem` }}>Hi hello</h1>
      <button onClick={changeHeader}>Click</button>
    </div>
  );
}

export default App;
