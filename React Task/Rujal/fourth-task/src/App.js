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
      show: false,
      error: false
    }
  }

  //Call the function when the component is mounted or when you entered in the component(App)
  componentDidMount() {
    this.fetchData()
  }

  //Fetching data from api and saving to state(data:[])
  fetchData = async () => {

    await fetch('http://localhost:5000/posts')
      .then(data => data.json())
      .then(res => this.setState({ data: res }))
      .catch(err => {
        this.setState({ error: true })
      })

    if (this.state.error) {
      //redirectT
      alert('Need To Run "npm run server" in seperate command')
    }
  }


  //Click on card and save to state(detail) by finding spcific id of the data
  onCardClick = (data) => {
    this.setState({
      show: true,
      detail:{...data}
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