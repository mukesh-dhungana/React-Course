import React, { Component } from "react";
import "./Card.css";
import Modal from "react-modal";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      author: "",
      fal: false, 
      show: false,
    };
  } 
  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
  }

  render() {
    const { data, title, author, fal } = this.state;
    return (
      <>
        <div className="container">
          {data.map(x => (
            <div
              className="card"
              key={x.objectID}
              onClick={() =>
                this.setState({
                  title: x.title,
                  author: x.author,
                  fal: true,
                  show: true,
                })
              }
            >
              <br />
              {x.author.toUpperCase()}
              <br />
              <br />
              {x.title}
            </div>
          ))}
          <Modal
            isOpen={fal}
            className={this.state.show ? "modal" : "close"}
            closeTimeoutMS={1000}
          >
            <br />
            <h1>
              <span>Author :</span>
              {` ${author}`}
            </h1>
            <h2>
              <span>Title :</span>
              {` ${title}`}
            </h2>
            <button onClick={() => this.setState({ fal: false, show: false })}>
              Cancel
            </button>
          </Modal>
        </div>
      </>
    );
  }
}
