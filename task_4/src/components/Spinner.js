import { Component } from 'react'

class Spinner extends Component {
  render() {
      console.log('spinner')
    return (
      <div className="spinner">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Spinner;
