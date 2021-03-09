import React from 'react'
import './App.css';
import Button from './Components/Button'
import { components } from './Components'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      component: ''
    }
  }

  getComponent = () => {
    const { id } = this.state
    return components.find(x => x.id === id)?.component
  }

  render() {

    return (
      <div className="App">
        <div>
          <nav>
            <ul>
              {
                components.map(x => (
                  <li key={x.id}>
                    <Button
                      onClick={() => this.setState({ id: x.id, component: x.name })}
                      component={this.state.component}
                    >
                      {x.name}
                    </Button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <div className="components">
          {this.getComponent()}
        </div>
      </div>
    );
  }

}

export default App;
