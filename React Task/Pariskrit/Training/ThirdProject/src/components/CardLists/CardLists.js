import React, { Component } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import "./cardlists.css";

export default class CardLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: false,
      showModal: false,
      selected: {},
    };
    this.handleShowModal = this.handleShowModal.bind(this);
  }
  async componentDidMount() {
    const fetchJokes = async () => {
      this.setState({ loading: true });
      const res = await fetch(
        "https://official-joke-api.appspot.com/jokes/programming/ten"
      );
      const data = await res.json();
      this.setState({ jokes: data });
      this.setState({ loading: false });
    };

    fetchJokes();
  }

  handleShowModal(joke) {
    this.setState({ showModal: true, selected: joke });
  }
  render() {
    const { jokes, loading, selected, showModal } = this.state;

    if (loading) {
      return <h1>Loading.....</h1>;
    }

    return (
      <div className="cardlists">
        {jokes.map((joke, index) => (
          <Card
            key={joke.id}
            number={index}
            joke={joke}
            handleShowModal={this.handleShowModal}
          />
        ))}
        {showModal && (
          <div className="cardlists__modal">
            <Modal
              selectedJoke={selected}
              handleShowModal={() => this.setState({ showModal: false })}
            />
          </div>
        )}
      </div>
    );
  }
}
