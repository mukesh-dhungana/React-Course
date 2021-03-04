import React, { Component } from 'react'
import './App.css'
import Card from './Components/Card'
import Modal from './Components/Modal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      detail: {},
      show: false
    }
  }

  //Call the function when the component is mounted or when you entered in the component(App)
  componentDidMount() {
    this.fetchData()
  }

  //Fetching data from api and saving to state(data:[])
  fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await data.json()
    this.setState({ data: res })
  }


  //Click on card and save to state(detail) by finding spcific id of the data
  onCardClick = (id) => {
    const detail = this.state.data.find(x => x.id === id)
    this.setState({
      show: true,
      detail
    })
  }

  render() {
    const { data, detail, show } = this.state //Destructuring
    return (
      <div className="App">
        {/* Mapping the card  from the list of infos in state.data array*/}
        {
          data.map(x => (<Card key={x.id} {...x} onClick={this.onCardClick} />))
        }

        {/* Modal will pop up when state(show) is true and the detail is provided to the modal after cardClick*/}
        <Modal
          {...detail} //Passing detail as prop to Modal component
          show={show} //Passing show state as prop to Modal component
          onClose={() => this.setState({ show: false, detail: {} })}
        />

      </div>
    )
  }
}

export default App;